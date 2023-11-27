<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\ZonaReparto;

class Viandero extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'descripcion','zonaReparto_id, logo, descripPago'];

    // public function zona_Reparto(){
    //     return $this->belongsTo(ZonaReparto::class, 'zonaReparto_id');
    // }

        //Relación uno a uno
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    //Relación uno a muchos
    public function viandas(){
        return $this->hasMany('App\Models\Vianda');
    }

    //Relación uno a muchos (inversa)
    public function zonaReparto(){
        return $this->belongsTo('App\Models\ZonaReparto', 'zonaReparto_id');
    }
}
