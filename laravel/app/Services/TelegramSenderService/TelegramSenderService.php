<?php

namespace App\Services\TelegramSenderService;

use App\Components\Clients\TelegramClient;
use App\Services\Service;

class TelegramSenderService extends Service implements ITelegramSenderService
{
    public function __construct(private TelegramClient $telegramClient) {}
    private function send(string $header, string $text = '')
    {
        $chatId = env("TELEGRAM_CHAT_ID");
        $message = $header . "\n" . "$text";
        $this->telegramClient->sendMessage($chatId, $message);
    }

    public function sendCallForm(array $form)
    {
        $message = "";

        // Формируем сообщение, обрабатывая каждое поле
        $message .= "Имя: " . ($form["name"] ?? "") . "\n";
        $message .= "Emain: " . ($form["email"] ?? "") . "\n";
        $message .= "Телефон: " . ($form["phone"] ?? "") . "\n";
        $message .= "Тема: " . ($form["topic"] ?? "") . "\n";
        $message .= "Сообщение: " . ($form["message"] ?? "") . "\n";
        $message .= "Политика конф.: " . (($form["policy"] ?? false) ? "да" : "нет") . "\n";

        $this->send("Заявка с сайта:\n" . ($form["page"] ?? ""), $message);
    }

    public function sendSubscriber(string $email)
    {
        $this->send("Новый подписчик рассылки:\n" . $email);
    }
}
