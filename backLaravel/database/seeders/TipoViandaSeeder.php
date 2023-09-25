<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoViandaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipo_Viandas')->insert([
            'descripTipoVianda' => "Tradicional",
            ]);
        DB::table('tipo_Viandas')->insert([
            'descripTipoVianda' => "Vegetariana",
            ]);
        DB::table('tipo_Viandas')->insert([
            'descripTipoVianda' => "Vegana",
            ]);
        DB::table('tipo_Viandas')->insert([
            'descripTipoVianda' => "Sin TACC",
            ]);

    }
}
