<?php

namespace App\Http\Controllers;
use App\Services\Influx;

use App\Models\Captor;

class CaptorController extends Controller
{
    public function index()
    {
        $captors = Captor::all();
        $influx = new Influx;

        $influx->index();
        return $captors;
    }

    public function show(Captor $captor)
    {
        return $captor;
    }
}
