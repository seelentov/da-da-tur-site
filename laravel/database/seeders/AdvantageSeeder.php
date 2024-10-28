<?php

namespace Database\Seeders;

use App\Models\Advantage;
use App\Models\Article;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdvantageSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Advantage::create([
            "title" => "БАЛАНС",
            "icon_url" => "/storage/icons/balance.svg",
            "description" => "Наши туры строятся в идеальном балансе стоимости и качества.",
            "position" => 0
        ]);

        Advantage::create([
            "title" => "СТОИМОСТЬ",
            "icon_url" => "/storage/icons/price.svg",
            "description" => "Всегда знаем где можно сэкономить ваши деньги, а где это категорически делать нельзя.",
            "position" => 100
        ]);

        Advantage::create([
            "title" => "ОТВЕТСТВЕННОСТЬ",
            "icon_url" => "/storage/icons/responsibility.svg",
            "description" => "Мы с большой ответственностью подходим к вашему путешествию.",
            "position" => 200
        ]);

        Advantage::create([
            "title" => "ПОНИМАНИЕ",
            "icon_url" => "/storage/icons/hand.svg",
            "description" => "Всегда с максимальным подниманием относимся к любым вашим вопросам/задачам/пожеланиям.",
            "position" => 300
        ]);

        Advantage::create([
            "title" => "КОМФОРТ",
            "icon_url" => "/storage/icons/understanding.svg",
            "description" => "Трепетно заботимся о вашем комфорте до, вовремя и после путешествия.",
            "position" => 400
        ]);

        Advantage::create([
            "title" => "БЛАГОДАРНОСТЬ",
            "icon_url" => "/storage/icons/star.svg",
            "description" => "Искренне благодарны каждому клиенту за то что обратился в нашу компанию.",
            "position" => 500
        ]);
    }
}
