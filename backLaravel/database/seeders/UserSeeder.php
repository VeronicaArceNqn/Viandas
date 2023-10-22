<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            "nombre" => "Verónica",
            "apellido" => "Arce",
            "fechaNac" => "1979-03-19",
            "telefono" => "299-5813933",
            "genero" => "f",
            "email" => "varce@gmail.com",
            "password" => "12345678"
        ]);
        DB::table('users')->insert([
            "nombre" => "Maria",
            "apellido" => "Perez",
            "fechaNac" => "1993-05-10",
            "telefono" => "299-5813955",
            "genero" => "f",
            "email" => "mperez@gmail.com",
            "password" => "12345678"
        ]);
    }
}
