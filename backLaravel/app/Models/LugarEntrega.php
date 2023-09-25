<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LugarEntrega extends Model
{
    use HasFactory;
    protected $fillable = ['calle','nroCalle','nombreLugar'];
}
