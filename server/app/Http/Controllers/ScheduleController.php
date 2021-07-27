<?php

namespace App\Http\Controllers;

use App\Services\Influx;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function index()
    {
        $schedules = Schedule::all();

        $test = new Influx;

        $test->index();


        return $schedules;
    }

    public function show(Schedule $schedule)
    {
        return $schedule;
    }
}
