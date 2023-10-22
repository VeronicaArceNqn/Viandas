<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VianderoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('vianderos')->insert([
            "user_id"=> 1,
            "descripcion" => "Cocina Vegetariana",
            "zonaReparto_id" => 1
        ]);
        DB::table('vianderos')->insert([
            "user_id"=> 2,
            "descripcion" => "Cocina Tradicional y minutas",
            "zonaReparto_id" => 1
        ]);
    }
}
