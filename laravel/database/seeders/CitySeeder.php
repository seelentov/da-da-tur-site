<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Tour;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        City::create([
            "name" => "Челябинск",
            "slug" => "chelyabinsk",
            "position" => 0
        ]);
    }
}
