<?php

namespace App\Policies;

use App\Models\Enrollment;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class EnrollmentPolicy
{
    public function modify(User $user, Enrollment $enrollment): Response
    {
        $enrollmentWithSubject = $enrollment->with('subject')->first();

        return $user->id === $enrollmentWithSubject->subject->user_id
            ? Response::allow()
            : Response::deny('You do not own this Subject');
    }
}
