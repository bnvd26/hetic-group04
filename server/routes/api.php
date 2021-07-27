<?php

use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CaptorController;
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
Route::get('rooms/{room}', [RoomController::class, 'update'])->name('rooms.update');
Route::get('captor', [CaptorController::class, 'index'])->name('captor.index');
Route::get('captor/{captor}', [CaptorController::class, 'show'])->name('captor.show');
