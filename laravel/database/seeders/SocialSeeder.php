<?php

namespace Database\Seeders;

use App\Models\Social;
use Illuminate\Database\Seeder;

class SocialSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Social::create([
            "name" => "VK Отзывы",
            "link" => "https://vk.com/topic-43252965_48943901",
            "image_url" => "/storage/seed/vk.svg",
            "position" => 0,
            "in_footer" => false,
            "in_reviews" => true,
            "in_contacts" => false,
        ]);

        Social::create([
            "name" => "ЯК Отзывы",
            "link" => "https://yandex.ru/maps/org/dada_tur/109299153839/reviews/?ll=61.398916,55.184926&tab=reviews&z=15",
            "image_url" => "/storage/seed/yandex.svg",
            "position" => 0,
            "in_footer" => false,
            "in_reviews" => true,
            "in_contacts" => false,
        ]);

        Social::create([
            "name" => "2GIS Отзывы",
            "link" => "https://2gis.ru/chelyabinsk/geo/70000001088163676",
            "image_url" => "/storage/seed/2gis.svg",
            "position" => 0,
            "in_footer" => false,
            "in_reviews" => true,
            "in_contacts" => false,
        ]);

        Social::create([
            "name" => "VK",
            "link" => "https://vk.com/dada_tour74",
            "image_url" => "/storage/seed/vk.svg",
            "position" => 0,
            "in_footer" => true,
            "in_reviews" => false,
            "in_contacts" => true,
        ]);
    }
}
