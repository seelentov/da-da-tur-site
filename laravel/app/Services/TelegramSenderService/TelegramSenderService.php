<?php

namespace App\Service\TelegramSenderService;

use App\Components\Clients\TelegramClient;
use App\Service\Service;

class TelegramSenderService extends Service implements ITelegramSenderService
{
    public function __construct(private TelegramClient $telegramClient) {}
    private function send(string $header, string $text)
    {
        $chatId = env("TELEGRAM_CHAT_ID");
        $message = $header . "\n" . "$text";
        $this->telegramClient->sendMessage($chatId, $message);
    }

    public function sendCallForm(string $name, string $email, string $phone, string $topic, string $message, bool $policy, string $page)
    {
        $message = "Имя: " . $name . "\n" .
            "Emain: " . $email . "\n" .
            "Телефон: " . $phone . "\n" .
            "Тема: " . $topic . "\n" .
            "Сообщение: " . $message . "\n" .
            "Политика конф.: " . ($policy ? "да" : "нет") . "\n";

        $this->send("Заявка с сайта:\n" . $page, $message);
    }

    public function sendReview(string $name, string $email, string $phone, int $stars, string $message, bool $policy): void
    {
        $message = "Имя: " . $name . "\n" .
            "Emain: " . $email . "\n" .
            "Телефон: " . $phone . "\n" .
            "Оценка: " . $stars . "\n" .
            "Сообщение: " . $message . "\n" .
            "Политика конф.: " . ($policy ? "да" : "нет") . "\n";

        $this->send("Отзыв с сайта", $message);
    }
}
