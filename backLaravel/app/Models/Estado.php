<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory;
    protected $fillable = ['nombreEstado', 'descripEstado'];

    //Relación muchos a muchos
    public function pedidoViandas(){
        return $this->belongsToMany(PedidoVianda::class, 'estado_viandas');
    }
}
