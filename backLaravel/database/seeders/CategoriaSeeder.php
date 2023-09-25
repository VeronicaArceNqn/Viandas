<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categorias')->insert([
            'descripCategoria' => "Carnes",
            ]);
        DB::table('categorias')->insert([
            'descripCategoria' => "Empanadas",
            ]);
        DB::table('categorias')->insert([
            'descripCategoria' => "Ensaladas",
            ]);
    }
}
