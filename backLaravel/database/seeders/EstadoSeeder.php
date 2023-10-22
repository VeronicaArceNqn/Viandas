<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('estados')->insert([
            'nombreEstado' => "Pendiente",
            'descripEstado' => "El pedido de vianda aún no ha sido confirmada por el viandero"
            ]);
        DB::table('estados')->insert([
            'nombreEstado' => "Confirmada",
            'descripEstado' => "El pedido de vianda está aceptada y en preparación"
            ]);
        DB::table('estados')->insert([
           'nombreEstado' => "En camino",
           'descripEstado' => "La vianda está en camino para la entrega"
            ]);
        DB::table('estados')->insert([
           'nombreEstado' => "En destino",
           'descripEstado' => "La vianda ya está en destino"
        ]);                
        DB::table('estados')->insert([
            'nombreEstado' => "Entregada",
            'descripEstado' => "La vianda fue entregada al cliente"
            ]);
        DB::table('estados')->insert([
           'nombreEstado' => "Cancelada",
           'descripEstado' => "La vianda fue cancelada"
            ]);
    }
}
