<?php

namespace App\Http\Controllers;

use App\Models\TipoVianda;
use Illuminate\Http\Request;


class TipoViandaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipoViandas = TipoVianda::all();
       // return view('tipo-viandas.index', compact('tipoViandas'));
        return $tipoViandas;
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
        $tipoViandas = new TipoVianda();
       $tipoViandas->descripTipoVianda = $request->descripTipoVianda;
       
       $tipoViandas->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
       $tipoViandas = TipoVianda::findOrFail($request->id);
       $tipoViandas->descripTipoVianda = $request->descripTipoVianda;
       
       $tipoViandas->save();
       return $tipoViandas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $tipoViandas = TipoVianda::destroy($request->id);
        return $tipoViandas;
    }
}

