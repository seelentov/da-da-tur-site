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
            "link" => "/",
            "in_header" => true,
            "in_footer" => false,
            "position" => 100
        ]);

        Menu::create([
            "name" => "ГОРЯЩИЕ ТУРЫ",
            "link" => "/",
            "in_header" => true,
            "in_footer" => false,
            "position" => 200
        ]);

        Menu::create([
            "name" => "О компании",
            "link" => "/",
            "in_header" => true,
            "in_footer" => false,
            "position" => 300
        ]);

        Menu::create([
            "name" => "Контакты",
            "link" => "/",
            "in_header" => false,
            "in_footer" => true,
            "position" => 300,
            "parent_id" => 4,
        ]);
    }
}
