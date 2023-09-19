<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ViandaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('viandas')->insert([
        'nombre' => "Empanadas de carne",
        'descripcion' => "Empanadas de masa casera",
        'idTipoVianda' => 1,
        'urlFoto' => "png",
        'cantidad' => 0,
        'precio' => 1000,
        'horarioPedido' => "10:00 am",
        'publicado' => true,
        ]);
        DB::table('viandas')->insert([
        'nombre' => "pizza de vegetales",
        'descripcion' => "masa casera de harina integral con vegetales salteados y queso de papa",
        'idTipoVianda' => 3,
        'urlFoto' => "jpg",
        'cantidad' => 5,
        'precio' => 2500,
        'horarioPedido' => "11:00 am",
        'publicado' => true,
        ]);
        DB::table('viandas')->insert([
        'nombre' => "tallarines con bolognesa",
        'descripcion' => "tallarines al huevo con salsa bolognesa",
        'idTipoVianda' => 1,
        'urlFoto' =>"png",
        'cantidad' => 10,
        'precio' => 1500,
        'horarioPedido' => "11:00 am",
        'publicado' => false,
        ]);
    }
}
