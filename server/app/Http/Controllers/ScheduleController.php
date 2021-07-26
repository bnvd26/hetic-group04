<?php

namespace App\Http\Controllers;

use App\Models\Schedule;

class SheduleController extends Controller
{
    public function index()
    {
        $shedules = Schedule::all();

        return $shedules;
    }

    public function show(Schedule $room)
    {
        return $room;
    }
}
