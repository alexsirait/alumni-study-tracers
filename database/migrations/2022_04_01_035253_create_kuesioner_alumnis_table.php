<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKuesionerAlumnisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuesioner_alumnis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('a1', 100)->nullable();
            $table->string('a2', 100)->nullable();
            $table->string('a3', 100)->nullable();
            $table->string('a4', 100)->nullable();
            $table->string('a5', 100)->nullable();
            $table->string('a6', 100)->nullable();
            $table->string('a7', 100)->nullable();
            $table->string('a8', 100)->nullable();
            $table->string('a9', 100)->nullable();
            $table->string('a10', 100)->nullable();
            $table->string('a11', 100)->nullable();
            $table->string('a12', 100)->nullable();
            $table->string('a13', 100)->nullable();
            $table->string('a14', 100)->nullable();
            $table->string('a15', 100)->nullable();
            $table->string('a16', 100)->nullable();
            $table->string('b1', 100)->nullable();
            $table->string('c1', 100)->nullable();
            $table->string('c2', 100)->nullable();
            $table->string('c3', 100)->nullable();
            $table->string('c4', 100)->nullable();
            $table->string('c5', 100)->nullable();
            $table->string('c6', 100)->nullable();
            $table->string('c7', 100)->nullable();
            $table->string('c8', 100)->nullable();
            $table->string('c9', 100)->nullable();
            $table->string('c10', 100)->nullable();
            $table->string('c11', 100)->nullable();
            $table->string('c12', 100)->nullable();
            $table->string('c13', 100)->nullable();
            $table->string('c14', 100)->nullable();
            $table->string('c15', 100)->nullable();
            $table->string('c16', 100)->nullable();
            $table->string('c17', 100)->nullable();
            $table->string('d1', 100)->nullable();
            $table->string('d2', 100)->nullable();
            $table->string('d3', 100)->nullable();
            $table->string('d4', 100)->nullable();
            $table->string('d5', 100)->nullable();
            $table->string('d6', 100)->nullable();
            $table->string('d7', 100)->nullable();
            $table->string('d8', 100)->nullable();
            $table->string('d9', 100)->nullable();
            $table->string('d10', 100)->nullable();
            $table->string('d11', 100)->nullable();
            $table->string('d12', 100)->nullable();
            $table->string('d13', 100)->nullable();
            $table->string('d14', 100)->nullable();
            $table->string('d15', 100)->nullable();
            $table->string('d16', 100)->nullable();
            $table->string('d17', 100)->nullable();
            $table->string('d18', 100)->nullable();
            $table->string('d19', 100)->nullable();
            $table->string('d20', 100)->nullable();
            $table->string('d21', 100)->nullable();
            $table->string('d22', 100)->nullable();
            $table->string('d23', 100)->nullable();
            $table->string('d24', 100)->nullable();
            $table->string('d25', 100)->nullable();
            $table->string('d26', 100)->nullable();
            $table->string('d27', 100)->nullable();
            $table->string('d28', 100)->nullable();
            $table->string('d29', 100)->nullable();
            $table->string('d30', 100)->nullable();
            $table->string('d31', 100)->nullable();
            $table->string('d32', 100)->nullable();
            $table->string('d33', 100)->nullable();
            $table->string('d34', 100)->nullable();
            $table->string('d35', 100)->nullable();
            $table->string('d36', 100)->nullable();
            $table->string('d37', 100)->nullable();
            $table->string('d38', 100)->nullable();
            $table->string('d39', 100)->nullable();
            $table->string('d40', 100)->nullable();
            $table->string('d41', 100)->nullable();
            $table->string('d42', 100)->nullable();
            $table->string('d43', 100)->nullable();
            $table->string('d44', 100)->nullable();
            $table->string('d45', 100)->nullable();
            $table->string('d46', 100)->nullable();
            $table->string('d47', 100)->nullable();
            $table->string('d48', 100)->nullable();
            $table->string('d49', 100)->nullable();
            $table->string('d50', 100)->nullable();
            $table->string('d51', 100)->nullable();
            $table->string('d52', 100)->nullable();
            $table->string('d53', 100)->nullable();
            $table->string('d54', 100)->nullable();
            $table->string('d55', 100)->nullable();
            $table->string('d56', 100)->nullable();
            $table->string('d57', 100)->nullable();
            $table->string('d58', 100)->nullable();
            $table->string('d59', 100)->nullable();
            $table->string('e1', 100)->nullable();
            $table->string('e2', 100)->nullable();
            $table->string('e3', 100)->nullable();
            $table->string('e4', 100)->nullable();
            $table->string('e5', 100)->nullable();
            $table->string('e6', 100)->nullable();
            $table->string('e7', 100)->nullable();
            $table->string('e8', 100)->nullable();
            $table->string('e9', 100)->nullable();
            $table->string('e10', 100)->nullable();
            $table->string('e11', 100)->nullable();
            $table->string('f1', 100)->nullable();
            $table->string('f2', 100)->nullable();
            $table->string('f3', 100)->nullable();
            $table->string('f4', 100)->nullable();
            $table->string('f5', 100)->nullable();
            $table->string('f6', 100)->nullable();
            $table->string('g1', 100)->nullable();
            $table->string('g2', 100)->nullable();
            $table->string('g3', 100)->nullable();
            $table->string('g4', 100)->nullable();
            $table->string('g5', 100)->nullable();
            $table->string('g6', 100)->nullable();
            $table->string('g7', 100)->nullable();
            $table->string('g8', 100)->nullable();
            $table->string('g9', 100)->nullable();
            $table->string('g10', 100)->nullable();
            $table->string('g11', 100)->nullable();
            $table->string('g12', 100)->nullable();
            $table->string('g13', 100)->nullable();
            $table->string('g14', 100)->nullable();
            $table->string('g15', 100)->nullable();
            $table->string('g16', 100)->nullable();
            $table->string('g17', 100)->nullable();
            $table->string('g18', 100)->nullable();
            $table->string('g19', 100)->nullable();
            $table->string('g20', 100)->nullable();
            $table->string('g21', 100)->nullable();
            $table->string('g22', 100)->nullable();
            $table->string('g23', 100)->nullable();
            $table->string('g24', 100)->nullable();
            $table->string('g25', 100)->nullable();
            $table->string('g26', 100)->nullable();
            $table->string('g27', 100)->nullable();
            $table->string('g28', 100)->nullable();
            $table->string('g29', 100)->nullable();
            $table->string('g30', 100)->nullable();
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
        Schema::dropIfExists('kuesioner_alumnis');
    }
}
