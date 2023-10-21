<?php

namespace App\Http\Controllers;

use App\Models\Vianda;
use Illuminate\Http\Request;

class ViandaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $vianda = Vianda::all();
       return $vianda;
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
        $vianda = new Vianda();
        $vianda->nombre = $request->nombre;
        $vianda->descripcion = $request->descripcion;
        $vianda->tipoVianda_id = $request->tipoVianda_id;
        $vianda->urlFoto = $request->urlFoto;
        $vianda->cantidad = $request->cantidad;
        $vianda->precio = $request->precio;
        $vianda->horarioPedido = $request->horarioPedido;
        $vianda->publicado = $request->publicado;
        $vianda->viandero_id = $request->viandero_id;
       
        $vianda->save();
        $data= [
            'message' => 'La vianda fue creada correctamente',
            'vianda' => $vianda
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vianda $vianda)
    {
        //
        return response()->json($vianda);
        //return $vianda;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vianda $vianda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vianda $vianda)
    {
        $vianda = Vianda::findOrFail($request->id);
        $vianda->nombre = $request->nombre;
        $vianda->descripcion = $request->descripcion;
        $vianda->tipoVianda_id = $request->tipoVianda_id;
        $vianda->urlFoto = $request->urlFoto;
        $vianda->cantidad = $request->cantidad;
        $vianda->precio = $request->precio;
        $vianda->horarioPedido = $request->horarioPedido;
        $vianda->publicado = $request->publicado;
        $vianda->viandero_id = $request->viandero_id;
       
        $vianda->save();
        $data= [
            'message' => 'La vianda fue modificada correctamente',
            'vianda' => $vianda
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $vianda = Vianda::destroy($request->id);
        $data= [
            'message' => 'La vianda fue borrada correctamente',
            'vianda' => $vianda
        ];
        return response()->json($data);
    }
}
