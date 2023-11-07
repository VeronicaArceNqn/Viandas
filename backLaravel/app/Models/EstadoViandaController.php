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
    public function store(Request $request)
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

    public function cambiarEstado(Request $request, $pedidoViandaId, $nuevoEstadoId)
    {
        $pedidoVianda = PedidoVianda::findOrFail($pedidoViandaId);
        $estadoActual = $pedidoVianda->estado_actual; // Supongamos que tienes una relación definida en tu modelo PedidoVianda

        // Actualizar fechaFin del estado actual
        $estadoActual->fechaFin = now();
        $estadoActual->save();

        // Crear nuevo registro en estado_viandas
        $nuevoEstadoVianda = new EstadoVianda();
        $nuevoEstadoVianda->pedidoVianda_id = $pedidoViandaId;
        $nuevoEstadoVianda->estado_id = $nuevoEstadoId;
        $nuevoEstadoVianda->fechaInicio = now();
        $nuevoEstadoVianda->save();

        return response()->json(['message' => 'Estado actualizado con éxito'], 200);
    }

}
