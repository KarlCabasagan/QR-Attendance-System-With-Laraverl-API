<?php

namespace Database\Seeders;

use App\Models\Attendance;
use App\Models\Enrollment;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User::factory()->count(5)->teacher()->has(Subject::factory()->count(2)->has(Enrollment::factory()->count(10)->for(User::factory()->student()), 'enrollments')->has(Schedule::factory()->count(2)), 'taughtSubjects')->create();
        User::factory()->count(3)->teacher()->has(Subject::factory()->count(rand(2,5))->has(Schedule::factory()->count(2))->has(Enrollment::factory()->count(10)->has(Attendance::factory()->count(3))), 'taughtSubjects')->create();
    }
}
