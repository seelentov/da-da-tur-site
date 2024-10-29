<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $guarded = [];

    public $timestamps = false;

    public function tours()
    {
        return $this->hasMany(Tour::class)->orderBy('position', "ASC");
    }
}
