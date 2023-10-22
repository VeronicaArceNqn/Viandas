<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
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
}
