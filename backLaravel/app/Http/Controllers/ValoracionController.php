<?php

namespace App\Http\Controllers;
use App\Models\Valoracion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ValoracionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $valoracion = Valoracion::all();       
        return $valoracion;
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
        // Validación de datos entrantes
        $validator = Validator::make($request->all(), [
            'pedidoVianda_id' => 'required|exists:pedido_viandas,id',
            'vianda_id' => 'required|exists:viandas,id',
            'puntuacion' => 'required|integer|min:1|max:5',
            'comentario' => 'nullable|string|max:255',
        ]);

        // Comprobar si hay errores en la validación
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            // Crear una nueva instancia de Valoracion
            $valoracion = new Valoracion();
            $valoracion->pedidoVianda_id = $request->pedidoVianda_id;
            $valoracion->vianda_id = $request->vianda_id;
            $valoracion->puntuacion = $request->puntuacion;
            $valoracion->comentario = $request->comentario;

            // Guardar la valoración en la base de datos
            $valoracion->save();

            // Respuesta con éxito y los datos de la valoración
            $data = [
                'message' => 'La valoración se guardó correctamente',
                'valoracion' => $valoracion
            ];
            return response()->json($data, 201);
        } catch (\Exception $e) {
            // Manejo de errores
            return response()->json(['message' => 'Error al guardar la valoración'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(valoracion $valoracion)
    {
        return response()->json($valoracion);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $valoracion = Valoracion::findOrFail($request->id);
        $valoracion->pedidoVianda_id = $request->pedidoVianda_id;
        $valoracion->vianda_id = $request->vianda_id;
        $valoracion->puntuacion = $request->puntuacion;
        $valoracion->comentario = $request->comentario;
        
        $valoracion->save();
        $data= [
            'message' => 'El valoracion se modificó correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $valoracion = Valoracion::destroy($request->id);
        $data= [
            'message' => 'El valoracion se borró correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }
}
