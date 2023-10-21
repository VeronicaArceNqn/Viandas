<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoria = Categoria::all();
        return $categoria;
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
        $categoria = new Categoria();
        $categoria->descripCategoria = $request->descripCategoria;
       
        $categoria->save();
        $data= [
            'message' => 'La categoría se guardó correctamente',
            'categoria' => $categoria
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Categoria $categoria)
    {
        //
        return response()->json($categoria);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categoria $categoria)
    {
        $categoria = Categoria::findOrFail($request->id);
        $categoria->descripCategoria = $request->descripCategoria;
        
        $categoria->save();
        $data= [
            'message' => 'La categoría se modificó correctamente',
            'categoria' => $categoria
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $categoria = Categoria::destroy($request->id);
        $data= [
            'message' => 'La categoría se borró correctamente',
            'categoria' => $categoria
        ];
        return response()->json($data);
    }
}
