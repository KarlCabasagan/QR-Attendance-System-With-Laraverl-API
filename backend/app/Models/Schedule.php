<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedule extends Model
{
    /** @use HasFactory<\Database\Factories\ScheduleFactory> */
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'day',
        'time',
    ];

    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }
}