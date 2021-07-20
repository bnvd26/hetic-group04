<?php

use App\Models\Student;
use Faker\Factory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('promotion');
            $table->timestamps();
        });

        $faker = Factory::create();

        for ($i=0; $i < 50; $i++) {
            Student::create(['first_name' => $faker->name, 'last_name' => $faker->name, 'promotion' => 'P' . $faker->numberBetween(2020, 2025)]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
