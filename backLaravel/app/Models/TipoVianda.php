<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoVianda extends Model
{
    use HasFactory;
    protected $fillable = ['descripTipoVianda'];

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'categoria_tipo_vianda');
    }
}




 