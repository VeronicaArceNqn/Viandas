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
        //
        $pedidoVianda = new PedidoVianda();
        $pedidoVianda->pedido_id = $request->pedido_id;
        $pedidoVianda->vianda_id = $request->vianda_id;        
        $pedidoVianda->cantidad = $request->cantidad;
        $pedidoVianda->precio = $request->precio;
        $pedidoVianda->fechaEntrega = $request->fechaEntrega;
        $pedidoVianda->lugarEntrega_id = $request->lugarEntrega_id;
       
        $pedidoVianda->save();
        $data= [
            'message' => 'El pedido de la vianda fue creado correctamente',
            'pedidoVianda' => $pedidoVianda
        ];
        return response()->json($data);
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
        // Obtén los vianderos filtrados por zonaReparto_id
        $pedidoViandaFiltrados = PedidoVianda::where('pedido_id', $pedidoId)->get();
    
        // Verifica si hay vianderos
        if ($pedidoViandaFiltrados->isEmpty()) {
            // No hay vianderos, devuelve un mensaje indicando que no hay resultados
            return response()->json(['message' => 'No hay pedidos anteriores'], 404);
        }
    
        // Para cada viandero, carga los datos del usuario asociado
        foreach ($pedidoViandaFiltrados as $pedidoVianda) {
            $pedidoVianda->vianda; // Esto asume que hay una relación llamada "usuario" en tu modelo Viandero
        }
    
        // Hay vianderos, devuelve los vianderos filtrados en formato JSON
        $data = [
            'message' => 'Listado de vianderos generado correctamente',
            'pedidoVianda' => $pedidoViandaFiltrados
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
