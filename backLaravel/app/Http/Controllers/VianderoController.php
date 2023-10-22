<?php

namespace App\Http\Controllers;

use App\Models\Viandero;
use Illuminate\Http\Request;

class VianderoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $viandero = Viandero::all();       
        return $viandero;
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
        $viandero = new Viandero();
        $viandero->user_id = $request->user_id;
        $viandero->descripcion = $request->descripcion;
       $viandero->zonaReparto_id = $request->zonaReparto_id;
       
       $viandero->save();
       $data= [
        'message' => 'Su registro se realizó correctamente',
        'viandero' => $viandero
    ];
    return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Viandero $viandero)
    {
        //
        return response()->json($viandero);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Viandero $viandero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Viandero $viandero)
    {
        $viandero = Viandero::findOrFail($request->id);
        $viandero->user_id = $request->user_id;
        $viandero->descripcion = $request->descripcion;
       $viandero->zonaReparto_id = $request->zonaReparto_id;
       
       $viandero->save();
       $data= [
        'message' => 'La modificación se realizó correctamente',
        'viandero' => $viandero
    ];
    return response()->json($data);
      
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $viandero = Viandero::destroy($request->id);
        $data= [
            'message' => 'La eliminación se realizó correctamente',
            'viandero' => $viandero
        ];
        return response()->json($data);
    }
}
