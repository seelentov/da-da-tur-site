<?php

namespace Database\Seeders;

use App\Models\Advantage;
use App\Models\Article;
use App\Models\Banner;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BannerSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        Banner::create([
            "title" => "СТРАНУ, КРАСОТЫ И ИЗЫСКАННОСТЬ КУЛЬТУР<br/><span>ИССЛЕДУЙ С <span>DADA-ТУР</span></span>",
            "image_url" => "/storage/icons/star.svg",
            "description" => "Искренне благодарны каждому клиенту за то что обратился в нашу компанию.",
            "link" => "/",
            "position" => 0
        ]);


        Banner::create([
            "title" => "БЛАГОДАРНОСТЬ",
            "image_url" => "/storage/icons/star.svg",
            "description" => "Искренне благодарны каждому клиенту за то что обратился в нашу компанию.",
            "link" => "/",
            "position" => 100
        ]);
    }
}
