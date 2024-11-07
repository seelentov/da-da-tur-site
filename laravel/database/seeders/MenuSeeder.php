<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Menu::create([
            "name" => "Главная",
            "link" => "/",
            "in_header" => true,
            "in_footer" => false,
            "position" => 0
        ]);

        Menu::create([
            "name" => "Расписание",
            "link" => "/tours",
            "in_header" => true,
            "in_footer" => false,
            "position" => 100
        ]);

        Menu::create([
            "name" => "ГОРЯЩИЕ ТУРЫ",
            "link" => "/hot",
            "in_header" => true,
            "in_footer" => false,
            "position" => 200
        ]);

        Menu::create([
            "name" => "О компании",
            "link" => "/about",
            "in_header" => true,
            "in_footer" => false,
            "position" => 300
        ]);
    }
}
