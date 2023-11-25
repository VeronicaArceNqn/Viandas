<?php

namespace App\Http\Controllers;

use App\Models\PedidoVianda;
use Illuminate\Http\Request;

class PedidoViandaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pedidoVianda = PedidoVianda::all();
       return $pedidoVianda;
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
        try {
            $pedidoId = $request->input('pedido_id');
            $viandas = $request->input('viandas'); // Aquí asumo que las viandas son un array de objetos con los datos necesarios para crear los PedidoViandas

            foreach ($viandas as $vianda) {
                PedidoVianda::create([
                    'pedido_id' => $pedidoId,
                    'vianda_id' => $vianda['vianda_id'],
                    'cantidad' => $vianda['cantidad'],
                    'fechaEntrega' => $vianda['fechaEntrega'],
                    'lugarEntrega_id' => $vianda['lugarEntrega_id'],
                    'precio' => $vianda['precio']
                   
                ]);
            }

            return response()->json(['message' => 'PedidoViandas creados correctamente'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al crear los PedidoViandas'], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(PedidoVianda $pedidoVianda)
    {
        //
        return response()->json($pedidoVianda);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PedidoVianda $pedidoVianda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PedidoVianda $pedidoVianda)
    {
        //
        $pedidoVianda = PedidoVianda::findOrFail($request->id);
        $pedidoVianda->pedido_id = $request->pedido_id;
        $pedidoVianda->vianda_id = $request->vianda_id;        
        $pedidoVianda->cantidad = $request->cantidad;
        $pedidoVianda->precio = $request->precio;
        $pedidoVianda->fechaEntrega = $request->fechaEntrega;
        $pedidoVianda->lugarEntrega_id = $request->lugarEntrega_id;
        
       
        $pedidoVianda->save();
        $data= [
            'message' => 'El pedido de la vianda fue modificado correctamente',
            'pedidoVianda' => $pedidoVianda
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $pedidoVianda = PedidoVianda::destroy($request->id);
        $data= [
            'message' => 'La eliminación se realizó correctamente',
            'pedidoVianda' => $pedidoVianda
        ];
        return response()->json($data);
    }

    public function obtenerPedidoViandasPorFecha(Request $request)
    {
        try {
            // Valida que se haya proporcionado la fecha en la solicitud
            $request->validate([
                'fecha' => 'required|date',
            ], [
                'fecha.required' => 'El campo fecha es obligatorio.',
                'fecha.date' => 'El campo fecha debe ser una fecha válida en formato YYYY-MM-DD.',
            ]);
    
            // Obtén la fecha desde la solicitud
            $fecha = $request->input('fecha');
    
            // Verifica si hay PedidoViandas para la fecha específica
            $pedidoViandas = PedidoVianda::whereDate('fechaEntrega', $fecha)->get();
    
            // Verifica si hay PedidoViandas
            if ($pedidoViandas->isEmpty()) {
                // No hay PedidoViandas, devuelve un mensaje indicando que no hay resultados
                return response()->json(['message' => 'No hay PedidoViandas para la fecha especificada'], 404);
            }
    
            // Hay PedidoViandas, devuelve las PedidoViandas en formato JSON
            $data = [
                'message' => 'Listado de PedidoViandas para la fecha especificada generado correctamente',
                'pedido_viandas' => $pedidoViandas
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            // Captura cualquier excepción y devuelve un mensaje genérico
            return response()->json(['message' => 'Se produjo un error al procesar la solicitud'], 500);
        }
    }
    

    public function obtenerPedidosViandasporPedido($pedidoId)
    {
        // Obtén los pedidoVianda filtrados por pedido_id
        $pedidoViandaFiltrados = PedidoVianda::with('vianda', 'lugarEntrega')
        ->where('pedido_id', $pedidoId)
        ->get();
    
        // Verifica si hay pedidoVianda
        if ($pedidoViandaFiltrados->isEmpty()) {
            // No hay pedidoVianda, devuelve un mensaje indicando que no hay resultados
            return response()->json(['message' => 'No hay pedidos anteriores'], 404);
        }
    
        // Para cada pedido, carga los datos del pedidoVianda asociado
        foreach ($pedidoViandaFiltrados as $pedidoVianda) {
            $vianda = $pedidoVianda->vianda; // Accede a los datos de vianda
    $lugarEntrega = $pedidoVianda->lugarEntrega; // Accede a los datos de lugar de entrega 
    //$estadoActual = EstadoViandaController::obtenerEstadoActual($pedidoVianda->id);
    // Aquí obtienes el estado actual para cada $pedidoVianda
        }
    
        
        $data = [
            'message' => 'Listado de pedidoViandas generado correctamente',
            'pedidoVianda' => $pedidoViandaFiltrados
            //'estadoActual' => $estadoActual
        ];
        return response()->json($data);
    }

    public function obtenerPedidoViandasPorFechaYViandero(Request $request)
    {
        try {
            $request->validate([
                'fecha' => 'required|date',
                'viandero_id' => 'required|exists:viandas,viandero_id', // Asegura que el viandero_id exista en la tabla viandas
            ], [
                'fecha.required' => 'El campo fecha es obligatorio.',
                'fecha.date' => 'El campo fecha debe ser una fecha válida en formato YYYY-MM-DD.',
                'viandero_id.required' => 'El campo viandero_id es obligatorio.',
                'viandero_id.exists' => 'El viandero especificado no existe en nuestra base de datos.',
            ]);
    
            $fecha = $request->input('fecha');
            $vianderoId = $request->input('viandero_id');
    
            $pedidoViandas = PedidoVianda::with('vianda') // Cargar la relación 'vianda'
                ->whereDate('fechaEntrega', $fecha)
                ->whereHas('vianda', function ($query) use ($vianderoId) {
                    $query->where('viandero_id', $vianderoId);
                })
                ->get();
    
            if ($pedidoViandas->isEmpty()) {
                return response()->json(['message' => 'No hay PedidoViandas para la fecha y viandero especificados'], 404);
            }
    
            $data = [
                'message' => 'Listado de PedidoViandas para la fecha y viandero especificados generado correctamente',
                'pedido_viandas' => $pedidoViandas
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Se produjo un error al procesar la solicitud'], 500);
        }
    }


}
