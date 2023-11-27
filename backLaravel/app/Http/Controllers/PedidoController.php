<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoVianda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pedido = Pedido::all();       
        return $pedido;
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
        DB::beginTransaction();

        try {
            $data = $request->validate([
                'user_id' => 'required|exists:users,id',
                'items' => 'required|array', // Suponiendo que los items están llegando en un array
                'items.*.vianda_id' => 'required',
                'items.*.cantidad' => 'required',
                'items.*.precio' => 'required',
                'items.*.fechaEntrega' => 'required',
                'items.*.lugarEntrega_id' => 'required',
            ]);
    
            // Crear el pedido
            $pedido = Pedido::create([
                'user_id' => $data['user_id'],
                // ...otros datos del pedido si los hay
            ]);
    
            // Crear los pedidoViandas asociados al pedido
            $pedidoViandas = [];
            foreach ($data['items'] as $item) {
                $pedidoVianda = new PedidoVianda([
                    'pedido_id' => $pedido->id,
                    'vianda_id' => $item['vianda_id'],
                    'cantidad' => $item['cantidad'],
                    'precio' => $item['precio'],
                    'fechaEntrega' => $item['fechaEntrega'],
                   'lugarEntrega_id' => $item['lugarEntrega_id']
                ]);
                $pedido->pedidoViandas()->save($pedidoVianda);

                $pedidoVianda->estados()->attach(1, ['fechaInicio' => now(), 'fechaFin' => null]);

            }
    
            // Asociar los pedidoViandas al pedido y guardarlos en una sola transacción
            //$pedido->pedidoViandas()->saveMany($pedidoViandas);
    
            DB::commit();
    
            return response()->json([
                'message' => 'El pedido y los pedidoViandas se guardaron correctamente',
                'data' => $data,
                'pedido' => $pedido,
                'pedidoViandas' => $pedidoViandas
            ], 201);
        } catch (\Exception $e) {
            DB::rollback();
    
            return response()->json([
                'message' => 'Error al guardar el pedido y los pedidoViandas',
                'data' => $data
            ], 500);
        }        
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $pedido)
    {
        //
        return response()->json($pedido);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
        //
        $pedido = Pedido::findOrFail($request->id);
        $pedido->user_id = $request->user_id;
               
       $pedido->save();
       $data= [
        'message' => 'El pedido se modificó correctamente',
        'pedido' => $pedido
    ];
    return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $pedido = Pedido::destroy($request->id);
        $data= [
            'message' => 'El pedido se borró correctamente',
            'pedido' => $pedido
        ];
        return response()->json($data);
    }

 
    public function obtenerPedidosUsuario(Request $request, $id)
    {
       // Obtén los pedidos del usuario ordenados por created_at de manera descendente
        $pedidos = Pedido::where('user_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();

        // Verifica si el usuario tiene pedidos
        if ($pedidos->isEmpty()) {
            // No hay pedidos, devuelve un mensaje indicando que no ha realizado ningún pedido
            return response()->json(['message' => 'Aún no has realizado ningún pedido'], 404);
        }
        // Itera sobre los pedidos y obtén las PedidoViandas asociadas
        // foreach ($pedidos as $pedido) {
        //     $pedido->pedido_viandas = $this->obtenerPedidoViandas($pedido->id);
        // }

        $data = [
            'message' => 'Listado de pedidos generado correctamente',
            'pedidos' => $pedidos
        ];
        return response()->json($data);
    }

    public function obtenerPedidoViandas($pedidoId)
    {
        // Obtén las PedidoViandas del Pedido específico
        $pedidoViandas = PedidoVianda::where('pedido_id', $pedidoId)->get();

        // Verifica si hay PedidoViandas
        if ($pedidoViandas->isEmpty()) {
            // No hay PedidoViandas, devuelve un mensaje indicando que no hay resultados
            return response()->json(['message' => 'No hay PedidoViandas para este pedido'], 404);
        }

        // Hay PedidoViandas, devuelve las PedidoViandas en formato JSON
        $data = [
            'message' => 'Listado de PedidoViandas generado correctamente',
            'pedido_viandas' => $pedidoViandas
        ];
        return response()->json($data);
    }

}
