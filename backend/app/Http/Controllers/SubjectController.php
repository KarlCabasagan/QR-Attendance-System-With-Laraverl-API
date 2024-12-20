<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Models\User;
use Carbon\Carbon;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Subject::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $userId)
    {
        $user = User::find($userId);

        $currentSubject = $user->getCurrentSubject();
        $nextSubjectsToday = $user->getNextSubjectsToday();
        $userSubjects = $user->getSubjectsByUserId();

        return [$currentSubject, $nextSubjectsToday, $userSubjects];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        //
    }

    // public function currentSubject(string $userId)
    // {

    // }
}
