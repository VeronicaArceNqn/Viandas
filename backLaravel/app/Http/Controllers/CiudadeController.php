<?php

namespace App\Http\Controllers;

use App\Models\Ciudade;
use Illuminate\Http\Request;

class CiudadeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ciudad = Ciudade::all();
        return $ciudad;
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
        $ciudad = new Ciudade();
       $ciudad->ciudad = $request->ciudad;
       
       $ciudad->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ciudade $ciudade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $ciudad = Ciudade::findOrFail($request->id);
        $ciudad->ciudad = $request->ciudad;
       
        $ciudad->save();
       return $ciudad;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $ciudad = Ciudade::destroy($request->id);
        return $ciudad;
    }
}
