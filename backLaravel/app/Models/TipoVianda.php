<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoVianda extends Model
{
    use HasFactory;
    protected $fillable = ['descripTipoVianda'];
    protected $table = 'tipoViandas'; // Si el nombre de la tabla es diferente
    protected $primaryKey = 'id'; // Si la clave primaria es diferente

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'categoria_tipo_vianda');
    }

    //Relación uno a muchos
    public function viandas(){
        return $this->hasMany(Vianda::class, 'tipoVianda_id', 'id');
    }
}




 