<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoVianda extends Model
{
    use HasFactory;
    protected $fillable = [
        'pedido_id',
        'vianda_id',
        'cantidad',
        'precio',
        'fechaEntrega',
        'lugarEntrega_id',
    ];
}
