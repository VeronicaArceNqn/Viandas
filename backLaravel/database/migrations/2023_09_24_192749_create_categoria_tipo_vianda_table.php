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
        Schema::create('categoria_tipo_vianda', function (Blueprint $table) {
            $table->id();
            $table->foreignId('categoria_id')
                    ->nullable()
                    ->constrained('categorias')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();

            $table->foreignId('tipoVianda_id')
                    ->nullable()
                    ->constrained('tipoViandas')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categoria_tipo_vianda');
    }
};
