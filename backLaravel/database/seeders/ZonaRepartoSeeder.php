<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ZonaRepartoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('zona_repartos')->insert([
            'nombreZona' => "Micro Centro Este",
            'descripZona' => "Calles Av. Argentina, Alderete, Independencia y Entre Ríos"
            ]);
        DB::table('zona_repartos')->insert([
            'nombreZona' => "Micro Centro Oeste",
            'descripZona' => "Calles Av. Argentina, Belgrano, San Martín y Jujuy"
            ]);
    }
}
