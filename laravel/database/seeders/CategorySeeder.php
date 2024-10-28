<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::create([
            "name" => "Автобусные туры",
            "slug" => "autobusniye_turi",
        ]);

        Category::create([
            "name" => "Авиа - туры",
            "slug" => "avia_turi",
        ]);
    }
}
