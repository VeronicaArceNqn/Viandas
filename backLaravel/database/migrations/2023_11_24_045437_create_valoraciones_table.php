<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('valoraciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pedidoVianda_id');
            $table->foreign('pedidoVianda_id')
                        ->references('id')
                        ->on('pedido_viandas')
                        ->onDelete('cascade');
            $table->unsignedBigInteger('vianda_id');
            $table->foreign('vianda_id')
                        ->references('id')
                        ->on('viandas')
                        ->onDelete('cascade');
            $table->integer('puntuacion');
            $table->text('comentario')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('valoraciones');
    }
};
