<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaptorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('captors', function (Blueprint $table) {
            $table->id();
            $table->id('room_id')->references('id')->on('rooms')->onDelete('cascade');;
            $table->integer('value');
            $table->string('tx_time_ms_epoch');
            $table->string('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('captor');
    }
}
