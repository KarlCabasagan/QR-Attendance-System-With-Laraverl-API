<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function taughtSubjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'enrollments');
    }

    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }

    public function getNextSubjectsToday()
    {
        $today = Carbon::now();
        $dayName = $today->format('l');
        $currentTime = $today->format('H:i');

        return $this->subjects()->whereHas('schedules', function ($query) use ($dayName, $currentTime) {
                $query->where('day', $dayName)->where('time', '>', $currentTime);
            })->with(['schedules' => function ($query) use ($dayName) {
                $query->where('day', $dayName);
            }])->with(['enrollments' => function ($query) {
                $query->where('user_id', $this->id);
            }])->get();
    }

    public function getCurrentSubject()
    {
        $today = Carbon::now();
        $dayName = $today->format('l');
        $currentTime = $today->format('H:i');

        return $this->subjects()->whereHas('schedules', function ($query) use ($dayName, $currentTime) {
                $query->where('day', $dayName)->where('time', '<=', $currentTime)->where('end', '>=', $currentTime);
            })->with(['schedules' => function ($query) use ($dayName) {
                $query->where('day', $dayName);
            }])->with(['enrollments' => function ($query) {
                $query->where('user_id', $this->id);
            }])->first();
    }

    public function getSubjectsByUserId()
    {
        if($this->role_id == 1) {
            return $this->subjects()->with('teacher')->with('schedules')->get();
        } else {
            return $this->taughtSubjects()->with(['enrollments' => function ($query) {
                $query->with('user')->with(['attendances' => function ($query) {
                    $query->orderBy('date', 'desc');
                }]);
            }])->get();
        }
    }
}
