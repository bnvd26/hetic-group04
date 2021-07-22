<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CaptorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('captor', function (Blueprint $table) {
            $table->integer('room_id')->references('id')->on('rooms')->onDelete('cascade');;
            $table->integer('value');
            $table->string('tx_time_ms_epoch');
            $table->string('type_of_captor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
