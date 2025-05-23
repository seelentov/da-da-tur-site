<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $guarded = [];

    public $timestamps = false;
    /** @use HasFactory<\Database\Factories\BannerFactory> */
    use HasFactory;
}
