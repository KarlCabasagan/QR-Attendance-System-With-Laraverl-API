<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Enrollment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RecordController extends Controller
{
    public function qrScanner(string $id)
    {
        $today = Carbon::now();
        $date = $today->format('Y-m-d');
        $currentTime = $today->format('H:i:s');

        $randomString = Str::random(16);

        Enrollment::where('id', $id)->update([
            'qr_code' => $randomString
        ]);
        
        Attendance::where('enrollment_id', $id)->where('date', $date)->update([
            'time' => $currentTime,
        ]);

        return ['message' => 'Attendance recorded.'];
    }
}
