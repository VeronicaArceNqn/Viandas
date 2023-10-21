<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use \stdClass;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'fechaNac' => 'required|date',
            'telefono'=> 'required',
            'genero' =>'required',
            
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
        $user = User::create([
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'fechaNac' => $request->fechaNac,
            'telefono' => $request->telefono,
            'genero' => $request->genero,
           
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'El registro fue exitoso',
            'data' =>$user,
            'access_token'=>$token, 
            'token_type'=>'Bearer',]);
    }
    
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password')))
        {
            return response()->json(['message' =>'No autorizado'], 401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Hola '.$user->nombre,
            'accessToken' =>$token,
            'token_type' => 'Bearer',
            'user' =>$user,
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return[
            'message' => 'Logout existoso y el token fue borrado'
        ];
    }
}
