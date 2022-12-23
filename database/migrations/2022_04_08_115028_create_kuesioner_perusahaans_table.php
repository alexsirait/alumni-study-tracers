<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKuesionerPerusahaansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuesioner_perusahaans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('a1')->nullable();
            $table->string('a2')->nullable();
            $table->string('a3')->nullable();
            $table->string('a4')->nullable();
            $table->string('a5')->nullable();
            $table->string('b1')->nullable();
            $table->string('b2')->nullable();
            $table->string('b3')->nullable();
            $table->string('b4')->nullable();
            $table->string('b5')->nullable();
            $table->string('b6')->nullable();
            $table->string('b7')->nullable();
            $table->string('b8')->nullable();
            $table->string('b9')->nullable();
            $table->string('b10')->nullable();
            $table->string('b11')->nullable();
            $table->string('b12')->nullable();
            $table->string('b13')->nullable();
            $table->string('b14')->nullable();
            $table->string('b15')->nullable();
            $table->string('b16')->nullable();
            $table->string('b17')->nullable();
            $table->string('b18')->nullable();
            $table->string('b19')->nullable();
            $table->string('b20')->nullable();
            $table->string('b21')->nullable();
            $table->string('b22')->nullable();
            $table->string('b23')->nullable();
            $table->string('b24')->nullable();
            $table->string('b25')->nullable();
            $table->string('b26')->nullable();
            $table->string('b27')->nullable();
            $table->string('b28')->nullable();
            $table->string('b29')->nullable();
            $table->string('b30')->nullable();
            $table->string('b31')->nullable();
            $table->string('b32')->nullable();
            $table->string('b33')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kuesioner_perusahaans');
    }
}
