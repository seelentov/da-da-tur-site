<?php

namespace App\Service\TelegramSenderService;


interface ITelegramSenderService
{
    public function sendCallForm(string $name, string $email, string $phone, string $topic, string $message, bool $policy, string $page);
    public function sendReview(string $name, string $email, string $phone, int $stars, string $message, bool $policy);
}
