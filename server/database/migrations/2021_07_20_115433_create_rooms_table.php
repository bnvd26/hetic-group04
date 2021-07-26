<?php

use App\Models\Room;
use Faker\Factory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('picture_path');
            $table->integer('capacity');
            $table->integer('total_present_students');
            $table->timestamps();
        });

        $faker = Factory::create();

        $rooms = ['Salle01', 'Salle02', 'Salle03', 'Salle04', 'Salle05', 'Salle06', 'Salle07', 'Salle08', 'Salle09', 'Salle10'];

        for ($i=0; $i < count($rooms); $i++) {
            Room::create([
                'name' => $rooms[$i],
                'picture_path' => 'picture_path',
                'capacity' => $faker->numberBetween(50, 60),
                'total_present_students' => 0
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}
