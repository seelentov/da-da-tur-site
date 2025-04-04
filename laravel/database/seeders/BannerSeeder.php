<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Banner::create([
        //     "title" => "<p>БОНУСНАЯ ПРОГРАММА DaDa-тур</p>",
        //     "description" => "<p>больше путешествий, больше выгоды!</p>",
        //     "image_url" => "/storage/seed/2.jpg",
        //     "link" => "https://mrqz.me/67c864abefe05f001926b2fb",
        //     "position" => 0
        // ]);

        Banner::create([
            "title" => "<p>СТРАНУ, КРАСОТЫ И ИЗЫСКАННОСТЬ КУЛЬТУР</p>",
            "description" => "<p>ИССЛЕДУЙ С <strong>DADA-ТУР</strong></p>",
            "image_url" => "/storage/seed/1.jpg",
            "link" => "/hot",
            "position" => 100
        ]);
    }
}
