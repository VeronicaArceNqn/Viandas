<?php

namespace App\Http\Controllers;

use App\Models\Estado;
use Illuminate\Http\Request;

class EstadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $estado = Estado::all();       
        return $estado;
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
        $estado = new Estado();
        $estado->nombreEstado = $request->nombreEstado;
       $estado->descripEstado = $request->descripEstado;
       
       $estado->save();
       $data= [
        'message' => 'El estado se guardó correctamente',
        'estado' => $estado
    ];
    return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Estado $estado)
    {
        //
        return response()->json($estado);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estado $estado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Estado $estado)
    {
        //
        $estado = Estado::findOrFail($request->id);
        $estado->nombreEstado = $request->nombreEstado;
       $estado->descripEstado = $request->descripEstado;
       
       $estado->save();
       $data= [
        'message' => 'El estado se modificó correctamente',
        'estado' => $estado
    ];
    return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $estado = Estado::destroy($request->id);
        $data= [
            'message' => 'El estado se borró correctamente',
            'estado' => $estado
        ];
        return response()->json($data);
    }
}
