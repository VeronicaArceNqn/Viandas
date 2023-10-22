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
        DB::table('tipoViandas')->insert([
            'descripTipoVianda' => "Tradicional",
            ]);
        DB::table('tipoViandas')->insert([
            'descripTipoVianda' => "Vegetariana",
            ]);
        DB::table('tipoViandas')->insert([
            'descripTipoVianda' => "Vegana",
            ]);
        DB::table('tipoViandas')->insert([
            'descripTipoVianda' => "Sin TACC",
            ]);

    }
}
