<?php

namespace App\Http\Controllers;

use App\Models\EstadoVianda;
use App\Models\Estado;
use App\Models\PedidoVianda;
use Illuminate\Http\Request;

class EstadoViandaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request )
    {
        //       
    }

    /**
     * Display the specified resource.
     */
    public function show(EstadoVianda $estadoVianda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EstadoVianda $estadoVianda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EstadoVianda $estadoVianda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EstadoVianda $estadoVianda)
    {
        //
    }

    public function cambiarEstado(Request $request)
    {
        $pedidoViandaId = $request->input('pedidoVianda_id');
    $nuevoEstadoId = $request->input('estado_id');

    // Verificar si los IDs son válidos
    $pedidoVianda = PedidoVianda::find($pedidoViandaId);
    $nuevoEstado = Estado::find($nuevoEstadoId);

    if (!$pedidoVianda || !$nuevoEstado) {
        return response()->json(['message' => 'IDs de pedidoVianda o estado no válidos'], 400);
    }
    
    // Buscar el estado actual por pedidoVianda_id
    $estadoActual = EstadoVianda::where('pedidoVianda_id', $pedidoViandaId)
                                ->orderBy('id', 'desc')
                                ->first();

        // Si no hay estado actual o el nuevo estado es diferente, crear uno nuevo
        if (!$estadoActual || ($estadoActual && $estadoActual->estado_id != $nuevoEstadoId)) {
            if ($estadoActual) {
                // Actualizar fechaFin del estado anterior
                $estadoActual->fechaFin = now();
                $nuevoEstadoVianda = $estadoActual->save();
            }

            // Crear un nuevo registro en estado_Viandas
            $nuevoEstadoVianda = new EstadoVianda();
            $nuevoEstadoVianda->pedidoVianda_id = $pedidoViandaId;
            $nuevoEstadoVianda->estado_id = $nuevoEstadoId;
            $nuevoEstadoVianda->fechaInicio = now();
            $nuevoEstadoVianda->save();
        } else {

              
            return response()->json(['message' => 'El estado ya está registrado para este pedidoVianda'], 400);
    }
    $data= [
        'message' => 'Estado actualizado con éxito',
        'nuevoEstadovianda' => $nuevoEstadoVianda,
        'estadoActual' => $estadoActual
    ];
    return response()->json($data);
    }

}
