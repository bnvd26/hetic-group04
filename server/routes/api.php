<?php

use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('students', [StudentController::class, 'index'])->name('students.index');
Route::get('students/{student}', [StudentController::class, 'show'])->name('students.show');
Route::get('rooms', [RoomController::class, 'index'])->name('rooms.index');
Route::get('rooms/{room}', [RoomController::class, 'show'])->name('rooms.show');
Route::get('schedule', [ScheduleController::class, 'index'])->name('schedule.index');
Route::get('schedule/{schedule}', [ScheduleController::class, 'show'])->name('schedule.show');