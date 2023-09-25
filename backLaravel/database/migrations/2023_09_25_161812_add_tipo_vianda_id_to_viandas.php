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
        Schema::table('viandas', function (Blueprint $table) {
                $table->foreignId('tipoVianda_id')
                        ->nullable()
                        ->after('descripcion')
                        ->constrained('tipo_Viandas')
                        ->cascadeOnUpdate()
                        ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('viandas', function (Blueprint $table) {
            $table->dropForeign(['tipoVianda_id']);
            $table->dropColumn('tipoVianda_id');
        });
    }
};
