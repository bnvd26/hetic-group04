<?php

namespace App\Http\Controllers;

use InfluxDB\Client;

class HomeController extends Controller
{
    public function index()
    {
        $host = "hetic.arcplex.fr";
        $port = "1883";
        $client = new Client($host, $port);
        dd($client);
    }
}
