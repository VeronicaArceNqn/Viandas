<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viandero extends Model
{
    use HasFactory;
    protected $fillable = ['descripcion','zonaReparto_id'];

    public function zona_Repartos(){
        return $this->belongsTo(ZonaReparto::class, 'id_zona_Reparto');
    }
}
