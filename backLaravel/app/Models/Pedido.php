<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $fillable = ['user_id'];

   //Relación uno a muchos (inversa)
   public function user(){
        return $this->belongsTo('App\Models\User');
    }
    
    //Relación uno a muchos
    public function pedidoViandas(){
        return $this->hasMany('App\Models\PedidoVianda');
    }

}
