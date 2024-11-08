<?php

namespace App\Services\TelegramSenderService;


interface ITelegramSenderService
{
    public function sendCallForm(array $form);
}
