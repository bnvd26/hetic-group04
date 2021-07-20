<?php

namespace App\Http\Controllers;

use App\Models\Room;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::all();

        return $rooms;
    }

    public function show(Room $room)
    {
        return $room;
    }
}
