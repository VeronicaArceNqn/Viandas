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
        $entrega = new LugarEntrega();
        $entrega->calle = $request->calle;
       $entrega->nroCalle = $request->nroCalle;
       $entrega->nombreLugar = $request->nombreLugar;
       
       $entrega->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(LugarEntrega $lugarEntrega)
    {
        //
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
        $entrega = LugarEntrega::findOrFail($request->id);
        $entrega->calle = $request->calle;
        $entrega->nroCalle = $request->nroCalle;
        $entrega->nombreLugar = $request->nombreLugar;
       
        $entrega->save();
        return $entrega;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $entrega = LugarEntrega::destroy($request->id);
        return $entrega;
    }
}
