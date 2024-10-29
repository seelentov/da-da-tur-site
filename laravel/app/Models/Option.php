<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $hidden = [
        'id',
    ];
    protected $guarded = [];

    public $timestamps = false;

    /** @use HasFactory<\Database\Factories\OptionFactory> */
    use HasFactory, Filterable;
}
