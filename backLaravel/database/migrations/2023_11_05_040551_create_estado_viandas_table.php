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
        Schema::create('estado_viandas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pedidoVianda_id')
                  
                    ->constrained('pedido_Viandas');
            $table->foreignId('estado_id')
                  
                    ->constrained('estados');       
            $table->date('fechaInicio');
            $table->date('fechaFin')
                ->nullable();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estado_viandas');
    }
};
