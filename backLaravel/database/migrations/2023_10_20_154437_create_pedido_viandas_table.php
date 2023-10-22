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
        Schema::create('pedido_viandas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pedido_id')
                    ->nullable()
                    ->constrained('pedidos')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();
            
            $table->foreignId('vianda_id')
                    ->nullable()
                    ->constrained('viandas')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();

            $table->integer('cantidad');
            $table->float('precio');
            $table->date('fechaEntrega');
            $table->foreignId('lugarEntrega_id')
                    ->nullable()
                    ->constrained('lugar_Entregas')
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
        Schema::dropIfExists('pedido_viandas');
    }
};
