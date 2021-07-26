<?php

namespace App\Http\Controllers;

use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function index()
    {
        $shedules = Schedule::all();

        return $shedules;
    }

    public function show(Schedule $schedule)
    {
        return $schedule;
    }
}
