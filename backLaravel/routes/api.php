<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViandaController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('viandas', [ViandaController::class, 'index']);

Route::get('/tipoVianda', 'App\Http\Controllers\TipoViandaController@index');
Route::post('/tipoVianda', 'App\Http\Controllers\TipoViandaController@store');
Route::put('/tipoVianda/{id}', 'App\Http\Controllers\TipoViandaController@update');
Route::delete('/tipoVianda/{id}', 'App\Http\Controllers\TipoViandaController@destroy');

Route::get('/categoria', 'App\Http\Controllers\CategoriaController@index');
Route::post('/categoria', 'App\Http\Controllers\CategoriaController@store');
Route::put('/categoria/{id}', 'App\Http\Controllers\CategoriaController@update');
Route::delete('/categoria/{id}', 'App\Http\Controllers\CategoriaController@destroy');

Route::get('/zonaReparto', 'App\Http\Controllers\ZonaRepartoController@index');
Route::post('/zonaReparto', 'App\Http\Controllers\ZonaRepartoController@store');
Route::put('/zonaReparto/{id}', 'App\Http\Controllers\ZonaRepartoController@update');
Route::delete('/zonaReparto/{id}', 'App\Http\Controllers\ZonaRepartoController@destroy');

Route::get('/ciudade', 'App\Http\Controllers\CiudadeController@index');
Route::post('/ciudade', 'App\Http\Controllers\CiudadeController@store');
Route::put('/ciudade/{id}', 'App\Http\Controllers\CiudadeController@update');
Route::delete('/ciudade/{id}', 'App\Http\Controllers\CiudadeController@destroy');

Route::get('/lugarEntrega', 'App\Http\Controllers\LugarEntregaController@index');
Route::post('/lugarEntrega', 'App\Http\Controllers\LugarEntregaController@store');
Route::put('/lugarEntrega/{id}', 'App\Http\Controllers\LugarEntregaController@update');
Route::delete('/lugarEntrega/{id}', 'App\Http\Controllers\LugarEntregaController@destroy');

Route::get('/viandero', 'App\Http\Controllers\VianderoController@index');
Route::post('/viandero', 'App\Http\Controllers\VianderoController@store');
Route::put('/viandero/{id}', 'App\Http\Controllers\VianderoController@update');
Route::delete('/viandero/{id}', 'App\Http\Controllers\VianderoController@destroy');



Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
    
});
    

