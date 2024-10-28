<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{

    protected $guarded = [];

    public $timestamps = false;

    /** @use HasFactory<\Database\Factories\OptionFactory> */
    use HasFactory;
}
