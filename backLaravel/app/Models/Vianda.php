<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vianda extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'descripcion',
        'tipoVianda_id',
        'urlFoto',
        'cantidad',
        'precio',
        'horarioPedido',
        'publicado',
        'viandero_id',
    ];

    //Relación uno a muchos (inversa)
    public function viandero(){
        return $this->belongsTo('App\Models\Viandero');
    }
    
}
