<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourDate extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    protected function casts(): array
    {
        return [
            'start_date' => 'datetime',
            'end_date' => 'datetime',
        ];
    }
}
