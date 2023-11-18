<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoVianda;
use Illuminate\Http\Request;

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
        //
        $pedido = new Pedido();
        $pedido->user_id = $request->user_id;
               
       $pedido->save();
       $data= [
            'message' => 'El pedido se guardó correctamente',
            'pedido' => $pedido
        ];
        return response()->json($data);
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
