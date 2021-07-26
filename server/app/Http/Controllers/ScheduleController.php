<?php

namespace App\Http\Controllers;

use App\Services\Influx;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function index()
    {
        // $shedules = Schedule::all();

        $test = new Influx;

        $test->index();


        // return $shedules;
    }

    public function show(Schedule $schedule)
    {
        return $schedule;
    }
}
