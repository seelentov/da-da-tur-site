<?php

namespace Database\Seeders;

use App\Models\ImageOption;
use App\Models\Option;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Option::create([
            "key" => "header_search_placeholder",
            "value" => "Поиск по сайту",
            "category" => "header"
        ]);

        Option::create([
            "key" => "schedule_header",
            "value" => "САМЫЕ ПОПУЛЯРНЫЕ",
            "category" => "schedule"
        ]);


        Option::create([
            "key" => "schedule_button",
            "value" => "ПОСМОТРЕТЬ ВСЕ ТУРЫ",
            "category" => "schedule"
        ]);

        Option::create([
            "key" => "schedule_page_header",
            "value" => "Расписание туров",
            "category" => "schedule_page"
        ]);

        Option::create([
            "key" => "last_minute_deal_header",
            "value" => "ГОРЯЩИЕ ТУРЫ",
            "category" => "last_minute_deal"
        ]);

        Option::create([
            "key" => "last_minute_deal_page_header",
            "value" => "Горящие туры",
            "category" => "last_minute_deal_page"
        ]);

        Option::create([
            "key" => "last_minute_deal_page_button",
            "value" => "Забронировать без предоплаты",
            "category" => "last_minute_deal_page"
        ]);

        Option::create([
            "key" => "advantages_header",
            "value" => "Преимущества <strong>DA-DA ТУР!<strong>",
            "category" => "advantages"
        ]);

        Option::create([
            "key" => "reviews_header",
            "value" => "Отзывы о нас в интернете говорят сами за себя",
            "category" => "reviews"

        ]);

        Option::create([
            "key" => "reviews_full",
            "value" => "ВЕСЬ ОТЗЫВ",
            "category" => "reviews"
        ]);

        Option::create([
            "key" => "reviews_button",
            "value" => "Оставить отзыв",
            "category" => "reviews"
        ]);

        Option::create([
            "key" => "tour_page_price",
            "value" => "Стоимость:",
            "category" => "tour_page"
        ]);

        Option::create([
            "key" => "tour_page_date",
            "value" => "Дата:",
            "category" => "tour_page"
        ]);


        Option::create([
            "key" => "tour_page_desc",
            "value" => "Описание:",
            "category" => "tour_page"
        ]);


        Option::create([
            "key" => "contacts_header",
            "value" => "Контакты",
            "category" => "contacts"
        ]);


        Option::create([
            "key" => "contacts_header2",
            "value" => "Задать вопрос",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_number_label",
            "value" => "Номер телефона",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_number",
            "value" => "+7 (902) 860 87-52",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_email_label",
            "value" => "Email:",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_email",
            "value" => "example@asd.ru",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_address",
            "value" => "улица Труда, 156В, Челябинск",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_address_label",
            "value" => "Адрес:",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_work_schedule_label",
            "value" => "График работы:",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_work_schedule",
            "value" => "Пн - пт, 9:00 - 18:00",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "contacts_map_token",
            "value" => "",
            "category" => "contacts"
        ]);

        Option::create([
            "key" => "footer_copyright",
            "value" => "Copyright © 2024 Da-Da tur.<br/>All rights reserved",
            "category" => "footer"
        ]);

        Option::create([
            "key" => "footer_sub_header",
            "value" => "Будьте в курсе нового",
            "category" => "footer"
        ]);

        Option::create([
            "key" => "footer_sub_placeholder",
            "value" => "Ваш e-mail",
            "category" => "footer"
        ]);


        Option::create([
            "key" => "form_name_placeholder",
            "value" => "Как вас зовут?",
            "category" => "form"
        ]);

        Option::create([
            "key" => "form_email_placeholder",
            "value" => "E-mail",
            "category" => "form"
        ]);

        Option::create([
            "key" => "form_phone_placeholder",
            "value" => "+7",
            "category" => "form"
        ]);

        Option::create([
            "key" => "form_topic_placeholder",
            "value" => "Тема",
            "category" => "form"
        ]);

        Option::create([
            "key" => "form_button",
            "value" => "Отправить",
            "category" => "form"
        ]);

        Option::create([
            "key" => "form_review_heaher",
            "value" => "Оставить отзыв",
            "category" => "form_review"
        ]);

        Option::create([
            "key" => "form_call_heaher",
            "value" => "Задать вопрос",
            "category" => "form_call"
        ]);

        Option::create([
            "key" => "form_policy",
            "value" => '<span>Я принимаю <a href="https://st-152-fz.ru/?name=%D0%9E%D0%9E%D0%9E%20%27%27%D0%90%D0%91%D0%A1%D0%9E%D0%9B%D0%AE%D0%A2%D0%98%D0%9D%D0%92%D0%95%D0%A1%D0%A2%27%27&amp;address=454080%2C+%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%B3.+%D0%BE.+%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%2C+%D0%B2%D0%BD.+%D1%80-%D0%BD+%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%2C+%D0%B3.+%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%2C+%D1%83%D0%BB.+%D0%A2%D1%80%D1%83%D0%B4%D0%B0%2C+%D0%B4.+156%D0%92%2C+%D0%BF%D0%BE%D0%BC%D0%B5%D1%89.+267" target="_blank">условия передачи информации</a></span>',
            "category" => "form"
        ]);

        Option::create([
            "key" => "about_header",
            "value" => "Коротко расскажем о себе.",
            "category" => "about"
        ]);

        Option::create([
            "key" => "about_button",
            "value" => "О нас",
            "category" => "about"
        ]);

        Option::create([
            "key" => "about_desc",
            "value" => "<p><strong>Наша компания - туроператор с большим опытом. </strong></p><p><strong>11 лет на рынке туристических услуг </strong></p><p><strong>Более 10000 довольных туристов</strong></p><p><strong>Наша миссия</strong> это дарить людям больше чем просто путешествие, а еще заботу, внимание, дружбу и доступность туризма.</p><p><strong>Уникальность</strong> нашей  компании заключается в том что все что мы делаем, рождается с любовью, неподдельным интересом к вашему комфорту и настоящей заботой о вас.</p>",
            "category" => "about"
        ]);

        ImageOption::create([
            "key" => "about_image",
            "value" => "/storage/seed/about.png",
            "category" => "about"
        ]);
    }
}
