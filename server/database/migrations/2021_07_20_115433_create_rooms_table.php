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
            $table->timestamps();
        });

        $faker = Factory::create();

        for ($i=0; $i < 50; $i++) {
            Room::create(['name' => 'C ' . $faker->name, 'picture_path' => 'picture_path']);
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
