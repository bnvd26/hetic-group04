<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

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

    public function update(Request $request, Room $room)
    {
        $room->update([
            $request->type => $request->value
        ]);

        return $room;
    }
}
