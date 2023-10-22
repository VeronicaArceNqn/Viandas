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

    //Relación uno a muchos (inversa)
    public function pedido(){
        return $this->belongsTo('App\Models\Pedido');
    }

    //Relación uno a uno
    public function vianda(){
        return $this->belongsTo('App\Models\Vianda');
    }
    
}
