<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Estate extends Model
{
    protected $fillable = ['title', 'location', 'area_sqm'];
}