<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Enrollment extends Model
{
    /** @use HasFactory<\Database\Factories\EnrollmentFactory> */
    use HasFactory;

    protected $fillable = [
        'qr_code',
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    public function subjects(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function attendances(): HasMany
    {
        return $this->hasMany(Attendance::class)->chaperone();
    }
}
