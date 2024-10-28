<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public $timestamps = false;
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;


    public function tours()
    {
        return $this->hasMany(Tour::class)->orderBy('position', "ASC");
    }
}
