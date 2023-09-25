<?php

namespace App\Http\Controllers;

use App\Models\ZonaReparto;
use Illuminate\Http\Request;

class ZonaRepartoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $zonaReparto = ZonaReparto::all();       
        return $zonaReparto;
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
        $zonaReparto = new ZonaReparto();
        $zonaReparto->nombreZona = $request->nombreZona;
       $zonaReparto->descripZona = $request->descripZona;
       
       $zonaReparto->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(ZonaReparto $zonaReparto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ZonaReparto $zonaReparto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $zonaReparto = ZonaReparto::findOrFail($request->id);
        $zonaReparto->nombreZona = $request->nombreZona;
        $zonaReparto->descripZona = $request->descripZona;
        
        $zonaReparto->save();
       return $zonaReparto;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $zonaReparto = ZonaReparto::destroy($request->id);
        return $zonaReparto;
    }
}
