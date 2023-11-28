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
       $viandero->logo = $request->logo;
       $viandero->descripPago = $request->descripPago;
       
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
        $viandero->user;
        $data = [
        'message' => 'Listado de vianderos generado correctamente',
        'vianderos' => $viandero
    ];
    return response()->json($data); 
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
       $viandero->logo = $request->logo;
       $viandero->descripPago = $request->descripPago;
       
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
    public function obtenerVianderosZona($zonaRepartoId)
{
    // Obtén los vianderos filtrados por zonaReparto_id
    $vianderosFiltrados = Viandero::where('zonaReparto_id', $zonaRepartoId)->get();

    // Verifica si hay vianderos
    if ($vianderosFiltrados->isEmpty()) {
        // No hay vianderos, devuelve un mensaje indicando que no hay resultados
        return response()->json(['message' => 'No hay vianderos para la zona de reparto especificada'], 404);
    }

    // Para cada viandero, carga los datos del usuario asociado
    foreach ($vianderosFiltrados as $viandero) {
        $viandero->user; // Esto asume que hay una relación llamada "usuario" en tu modelo Viandero
    }

    // Hay vianderos, devuelve los vianderos filtrados en formato JSON
    $data = [
        'message' => 'Listado de vianderos generado correctamente',
        'vianderos' => $vianderosFiltrados
    ];
    return response()->json($data);
}

    public function obtenerViandasDeVianderosZona($zonaRepartoId)
    {
        // Obtén los vianderos filtrados por zonaReparto_id
        $vianderosFiltrados = Viandero::where('zonaReparto_id', $zonaRepartoId)->get();

        // Verifica si hay vianderos
        if ($vianderosFiltrados->isEmpty()) {
            // No hay vianderos, devuelve un mensaje indicando que no hay resultados
            return response()->json(['message' => 'No hay viandas de vianderos para la zona de reparto especificada'], 404);
        }

        // Para cada viandero, carga los datos del usuario asociado
        foreach ($vianderosFiltrados as $viandero) {
            $viandero->viandas; 
            foreach ($viandero->viandas as $viand) {
                $viand->urlFoto = url($viand->urlFoto);
            }
        }

        // Hay vianderos, devuelve los vianderos filtrados en formato JSON
        $data = [
            'message' => 'Listado de las viandas de los vianderos por zona generado correctamente',
            'vianderos' => $vianderosFiltrados
        ];
        return response()->json($data);
    }
}
