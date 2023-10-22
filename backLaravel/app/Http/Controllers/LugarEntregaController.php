<?php

namespace App\Http\Controllers;

use App\Models\LugarEntrega;
use Illuminate\Http\Request;

class LugarEntregaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $entrega = LugarEntrega::all();       
        return $entrega;
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
        $lugarEntrega = new LugarEntrega();
        $lugarEntrega->user_id = $request->user_id;
        $lugarEntrega->calle = $request->calle;
        $lugarEntrega->nroCalle = $request->nroCalle;
        $lugarEntrega->nombreLugar = $request->nombreLugar;
        $lugarEntrega->provincia = $request->provincia;
        $lugarEntrega->ciudad = $request->ciudad;
       
       $lugarEntrega->save();
       $data= [
            'message' => 'El lugar de entrega se registró correctamente',
            'lugarEntrega' => $lugarEntrega
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(LugarEntrega $lugarEntrega)
    {
        //
        return response()->json($lugarEntrega);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LugarEntrega $lugarEntrega)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $lugarEntrega = LugarEntrega::findOrFail($request->id);
        $lugarEntrega->user_id = $request->user_id;
        $lugarEntrega->calle = $request->calle;
        $lugarEntrega->nroCalle = $request->nroCalle;
        $lugarEntrega->nombreLugar = $request->nombreLugar;
        $lugarEntrega->provincia = $request->provincia;
        $lugarEntrega->ciudad = $request->ciudad;
       
        $lugarEntrega->save();
        $data= [
            'message' => 'El lugar de entrega se modificó correctamente',
            'lugarEntrega' => $lugarEntrega
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $lugarEntrega = LugarEntrega::destroy($request->id);
        $data= [
            'message' => 'El lugar de entrega se borró correctamente',
            'lugarEntrega' => $lugarEntrega
        ];
        return response()->json($data);
    }
}
