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
        // Valida que se haya proporcionado la fecha en la solicitud
        $this->validate($request, [
             'fecha' => 'required|date',
         ], [
            'fecha.required' => 'El campo fecha es obligatorio.',
            'fecha.date' => 'El campo fecha debe ser una fecha válida en formato YYYY-MM-DD.',
        ]);

        // Obtén la fecha desde la solicitud
        $fecha = $request->input('fecha');

        // Obtén las PedidoViandas para la fecha específica
        $pedidoViandas = PedidoVianda::whereDate('fechaEntrega', $fecha)->get();

        // Verifica si hay PedidoViandas
        if ($pedidoViandas->isEmpty()) {
            // No hay PedidoViandas, devuelve un mensaje indicando que no hay resultados
            return response()->json(['message' => 'No hay PedidoViandas para la fecha especificada'], 200);
        }

        // Hay PedidoViandas, devuelve las PedidoViandas en formato JSON
        $data = [
            'message' => 'Listado de PedidoViandas para la fecha especificada generado correctamente',
            'pedido_viandas' => $pedidoViandas
        ];
        return response()->json($data);
    }
}
