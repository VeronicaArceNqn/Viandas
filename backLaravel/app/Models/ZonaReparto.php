<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZonaReparto extends Model
{
    use HasFactory;
    protected $fillable = ['nombreZona', 'descripZona'];

    //Relación uno a muchos
    public function vianderos(){
        return $this->hasMany('App\Models\Viandero', 'zonaReparto_id');
    }
}
