<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valoracion extends Model
{
    use HasFactory;

    protected $fillable = [
        'pedidoVianda_id',
        'vianda_id',
        'puntuacion',
        'comentario'
    ];

    // Relación con PedidoVianda
    public function pedidoVianda()
    {
        return $this->belongsTo(PedidoVianda::class);
    }

    // Relación con Vianda
    public function vianda()
    {
        return $this->belongsTo(Vianda::class);
    }
}
