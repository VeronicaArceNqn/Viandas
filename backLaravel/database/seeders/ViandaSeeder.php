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
        'tipoVianda_id' => 1,
        'urlFoto' => "https://cdn.pedix.app/br3yUFyNNsfxW2QA3gxH/products/1670003025149-58313.png?size=1500x1500",
        'cantidad' => 0,
        'precio' => 1000,
        'horarioPedido' => "10:00 am",
        'publicado' => true,
        'viandero_id' => 1
        ]);
        DB::table('viandas')->insert([
        'nombre' => "pizza de vegetales",
        'descripcion' => "masa casera de harina integral con vegetales salteados y queso de papa",
        'tipoVianda_id' => 3,
        'urlFoto' => "https://previews.123rf.com/images/belchonock/belchonock1605/belchonock160500734/56111701-deliciosa-pizza-con-verduras-ca%C3%ADdas-y-trozos-de-carne-aislado-en-blanco.jpg",
        'cantidad' => 5,
        'precio' => 2500,
        'horarioPedido' => "11:00 am",
        'publicado' => true,
        'viandero_id' => 1
        ]);
        DB::table('viandas')->insert([
        'nombre' => "tallarines con bolognesa",
        'descripcion' => "tallarines al huevo con salsa bolognesa",
        'tipoVianda_id' => 1,
        'urlFoto' =>"https://media.istockphoto.com/id/469246470/es/foto/tagliatelle-fettuccine-con-salsa-rag%C3%BA-de-carne.jpg?s=612x612&w=0&k=20&c=yFtY2Al3BouD8XP3TnbpbxnsKKTXHA31abUbfITdoZM=",
        'cantidad' => 10,
        'precio' => 1500,
        'horarioPedido' => "11:00 am",
        'publicado' => false,
        'viandero_id' => 2
        ]);
    }
}
