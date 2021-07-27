<?php

use App\Models\Room;
use Faker\Factory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsInRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rooms', function (Blueprint $table) {
            $table->boolean('air_conditioner')->after('name')->default(false);
            $table->boolean('projector')->after('name')->default(false);
            $table->string('degree')->after('name')->nullable();
            $table->string('luminosity')->after('name')->nullable();
        });

        $rooms = Room::all();

        $faker = Factory::create();

        foreach ($rooms as $room) {
            $room->update([
                'degree' => $faker->numberBetween(18, 26),
                'luminosity' => $faker->numberBetween(200, 400),
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
        Schema::table('rooms', function (Blueprint $table) {
            //
        });
    }
}
