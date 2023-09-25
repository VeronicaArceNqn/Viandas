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
            $table->foreignId('viandero_id')
                        ->nullable()
                        ->after('publicado')
                        ->constrained('vianderos')
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
            $table->dropForeign(['viandero_id']);
            $table->dropColumn('viandero_id');
        });
    }
};
