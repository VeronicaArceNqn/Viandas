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
        Schema::create('vianderos', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->foreignId('zonaReparto_id')
                    ->nullable()
                    ->constrained('zona_Repartos')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vianderos');
    }
};
