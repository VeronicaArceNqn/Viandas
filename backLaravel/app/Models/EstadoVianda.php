<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoVianda extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'estado_viandas';


    public function estado()
    {
        return $this->belongsTo(Estado::class, 'estado_id');
    }
}
