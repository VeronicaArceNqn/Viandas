<?php

namespace App\Http\Controllers;

use App\Models\Vianda;
use Illuminate\Http\Request;

class ViandaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $vianda = Vianda::all();
       return $vianda;
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
    }

    /**
     * Display the specified resource.
     */
    public function show(Vianda $vianda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vianda $vianda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vianda $vianda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vianda $vianda)
    {
        //
    }
}
