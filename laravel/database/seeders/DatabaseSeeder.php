<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdvantageSeeder::class,
            BannerSeeder::class,
            CitySeeder::class,
            CategorySeeder::class,
            OptionSeeder::class,
            ReviewSeeder::class,
            SocialSeeder::class,
            TourSeeder::class,
            // AdminSeeder::class,
        ]);
    }
}
