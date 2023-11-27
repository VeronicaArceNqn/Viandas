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
        //return $this->belongsToMany(PedidoVianda::class, 'estado_viandas');
       return $this->belongsToMany(
        PedidoVianda::class,
        'estado_viandas',
        'estado_id', // Nombre de la clave foránea en la tabla pivote que hace referencia a la tabla Estado
        'pedidoVianda_id' // Nombre de la clave foránea en la tabla pivote que hace referencia a la tabla PedidoVianda
    )->withPivot('fechaInicio', 'fechaFin'); // Columnas adicionales en la tabla pivote

    }
}
