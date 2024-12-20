<?php

use App\Models\Enrollment;
use Carbon\Carbon;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function () {
    $enrollments = Enrollment::all();

    $today = Carbon::today();
    $formattedDate = $today->format('Y-m-d');

    foreach($enrollments as $enrollment) {
        $enrollment->attendances()->create([
            'date' => $formattedDate,
        ]);
    }

})->everyMinute();