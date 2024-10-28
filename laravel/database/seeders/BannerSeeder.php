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
        Banner::create([
            "title" => "<p>СТРАНУ, КРАСОТЫ И ИЗЫСКАННОСТЬ КУЛЬТУР</p>",
            "description" => "<p>ИССЛЕДУЙ С <strong>DADA-ТУР</strong></p>",
            "image_url" => "/storage/seed/1.jpg",
            "link" => "/",
            "position" => 0
        ]);

        Banner::create([
            "title" => "<p>СТРАНУ, КРАСОТЫ И ИЗЫСКАННОСТЬ КУЛЬТУР</p>",
            "description" => "<p>ИССЛЕДУЙ С <strong>DADA-ТУР</strong></p>",
            "image_url" => "/storage/seed/1.jpg",
            "link" => "/",
            "position" => 0
        ]);
    }
}
