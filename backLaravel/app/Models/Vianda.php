<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vianda extends Model
{
    use HasFactory;
   // use SoftDeletes;
    protected $fillable = [
        'nombre',
        'descripcion',
        'tipoVianda_id',
        'urlFoto',
        'cantidad',
        'precio',
        'horarioPedido',
        'publicado',
        'viandero_id',
    ];

    //Relación uno a muchos (inversa)
    public function viandero(){
        return $this->belongsTo('App\Models\Viandero');
    }
    //Relación uno a uno
    public function tipoVianda(){
        return $this->belongsTo(TipoVianda::class, 'tipoVianda_id', 'id');
    }

    //Relación uno a muchos
    public function pedidoViandas(){
        return $this->hasMany('App\Models\PedidoVianda');
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class, 'vianda_id');
    }

    public function getRating()
    {
        $totalValoraciones = $this->valoraciones()->count();
        $totalPuntuacion = $this->valoraciones()->sum('puntuacion');

        if ($totalValoraciones > 0) {
            return $totalPuntuacion / $totalValoraciones;
        }

        return 0; // En caso de no tener valoraciones aún
    }

    public function getRatingUnaVianda($viandaId)
{
    $vianda = Vianda::findOrFail($viandaId);
    $rating = $vianda->getRating();

    return response()->json(['rating' => $rating]);
}
    
}
