<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Http\Requests\StoreAttendanceRequest;
use App\Http\Requests\UpdateAttendanceRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAttendanceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        return $attendance;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attendance $attendance)
    {
        $today = Carbon::now();
        $currentTime = $today->format('H:i:s');

        if(!$attendance->time && $request->status === 'present') {
            $attendance->update([
                'time' => $currentTime
            ]);

            return $attendance;
        }

        if($attendance->time && $request->status === 'absent') {
            $attendance->update([
                'time' => null
            ]);

            return $attendance;
        }
        
        return ['message' => 'Cannot change into the same status'];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}
