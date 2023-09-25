<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = ['descripCategoria'];

    public function tipoViandas()
    {
        return $this->belongsToMany(TipoVianda::class, 'categoria_tipo_vianda');
    }
    
}

