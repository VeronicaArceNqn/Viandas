<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViandaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

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
Route::get('user', 'App\Http\Controllers\UserController@index');
Route::get('user/{user}', 'App\Http\Controllers\UserController@show');
Route::put('user/{id}', [UserController::class, 'update']);

 Route::get('viandas', [ViandaController::class, 'index']);
 Route::get('/viandas/{vianda}', 'App\Http\Controllers\ViandaController@show');
 Route::put('/viandas/{vianda}', 'App\Http\Controllers\ViandaController@update');
 Route::post('/viandas', 'App\Http\Controllers\ViandaController@store');
Route::delete('/viandas/{id}', 'App\Http\Controllers\ViandaController@destroy');
//Route::resource('/viandas', ViandaController::class);
Route::get('/viandas/filtrar/{id}', 'App\Http\Controllers\ViandaController@filtrarPorTipoVianda');

Route::get('/tipoVianda', 'App\Http\Controllers\TipoViandaController@index');
Route::get('/tipoVianda/{tipoViandas}', 'App\Http\Controllers\TipoViandaController@show');
Route::post('/tipoVianda', 'App\Http\Controllers\TipoViandaController@store');
Route::put('/tipoVianda/{id}', 'App\Http\Controllers\TipoViandaController@update');
Route::delete('/tipoVianda/{id}', 'App\Http\Controllers\TipoViandaController@destroy');

Route::get('/categoria', 'App\Http\Controllers\CategoriaController@index');
Route::get('/categoria/{categoria}', 'App\Http\Controllers\CategoriaController@show');
Route::post('/categoria', 'App\Http\Controllers\CategoriaController@store');
Route::put('/categoria/{id}', 'App\Http\Controllers\CategoriaController@update');
Route::delete('/categoria/{id}', 'App\Http\Controllers\CategoriaController@destroy');

Route::get('/zonaReparto', 'App\Http\Controllers\ZonaRepartoController@index');
Route::get('/zonaReparto/{zonaReparto}', 'App\Http\Controllers\ZonaRepartoController@show');
Route::post('/zonaReparto', 'App\Http\Controllers\ZonaRepartoController@store');
Route::put('/zonaReparto/{id}', 'App\Http\Controllers\ZonaRepartoController@update');
Route::delete('/zonaReparto/{id}', 'App\Http\Controllers\ZonaRepartoController@destroy');

Route::get('/lugarEntrega', 'App\Http\Controllers\LugarEntregaController@index');
Route::get('/lugarEntrega/{lugarEntrega}', 'App\Http\Controllers\LugarEntregaController@show');
Route::get('/lugarEntrega/User/{user_id}', 'App\Http\Controllers\LugarEntregaController@getLugaresPorUsuario');
Route::post('/lugarEntrega', 'App\Http\Controllers\LugarEntregaController@store');
Route::put('/lugarEntrega/{id}', 'App\Http\Controllers\LugarEntregaController@update');
Route::delete('/lugarEntrega/{id}', 'App\Http\Controllers\LugarEntregaController@destroy');

Route::get('/viandero', 'App\Http\Controllers\VianderoController@index');
Route::get('/viandero/{viandero}', 'App\Http\Controllers\VianderoController@show');
Route::post('/viandero', 'App\Http\Controllers\VianderoController@store');
Route::put('/viandero/{id}', 'App\Http\Controllers\VianderoController@update');
Route::delete('/viandero/{id}', 'App\Http\Controllers\VianderoController@destroy');
Route::get('/viandero/zona-reparto/{zonaRepartoId}', 'App\Http\Controllers\VianderoController@obtenerVianderosZona');


Route::get('/estado', 'App\Http\Controllers\EstadoController@index');
Route::get('/estado/{estado}', 'App\Http\Controllers\EstadoController@show');
Route::post('/estado', 'App\Http\Controllers\EstadoController@store');
Route::put('/estado/{id}', 'App\Http\Controllers\EstadoController@update');
Route::delete('/estado/{id}', 'App\Http\Controllers\EstadoController@destroy');

Route::get('/pedido', 'App\Http\Controllers\PedidoController@index');
Route::get('/pedido/{pedido}', 'App\Http\Controllers\PedidoController@show');
Route::post('/pedido', 'App\Http\Controllers\PedidoController@store');
Route::put('/pedido/{id}', 'App\Http\Controllers\PedidoController@update');
Route::delete('/pedido/{id}', 'App\Http\Controllers\PedidoController@destroy');
Route::get('/pedido/user/{id}', 'App\Http\Controllers\PedidoController@obtenerPedidosUsuario');

Route::get('/pedidoVianda', 'App\Http\Controllers\PedidoViandaController@index');
Route::get('/pedidoVianda/{pedidoVianda}', 'App\Http\Controllers\PedidoViandaController@show');
Route::post('/pedidoVianda', 'App\Http\Controllers\PedidoViandaController@store');
Route::put('/pedidoVianda/{id}', 'App\Http\Controllers\PedidoViandaController@update');
Route::delete('/pedidoVianda/{id}', 'App\Http\Controllers\PedidoViandaController@destroy');
//Route::get('/fechaHoy', 'App\Http\Controllers\PedidoViandaController@fechaHoy');
 Route::get('/porFecha', 'App\Http\Controllers\PedidoViandaController@obtenerPedidoViandasPorFecha');
 Route::get('/porPedidoVianda/{id}', 'App\Http\Controllers\PedidoViandaController@obtenerPedidosViandasporPedido');
// Route::get('/pedidoVianda/pedidosViandaHoy', 'App\Http\Controllers\PedidoViandaController@obtenerPedidosViandaParaHoy');
Route::get('/pedido-viandas/por-fecha-y-viandero', 'App\Http\Controllers\PedidoViandaController@obtenerPedidoViandasPorFechaYViandero');

Route::get('/estadoVianda', 'App\Http\Controllers\EstadoViandaController@index');
Route::get('/estadoVianda/{estadoVianda}', 'App\Http\Controllers\EstadoViandaController@show');
Route::post('/estadoVianda', 'App\Http\Controllers\EstadoViandaController@store');
Route::put('/estadoVianda/{id}', 'App\Http\Controllers\EstadoViandaController@update');
Route::get('/estadoVianda/obtenerEstado/{pedidoVianda_id}', 'App\Http\Controllers\EstadoViandaController@obtenerEstadoActual');
Route::patch('/actualizarCarrito/{id}','App\Http\Controllers\ViandaController@actualizarCarrito');//actualizar stock de viandas



Route::post('/estadoVianda', 'App\Http\Controllers\EstadoViandaController@cambiarEstado');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
    
});
    

