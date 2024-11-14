<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sender\SendCallFormSenderRequest;
use App\Mail\CallFormMail;
use App\Services\TelegramSenderService\TelegramSenderService;
use Illuminate\Support\Facades\Mail;

class SenderController extends Controller
{
    public function __construct(private TelegramSenderService $telegramSenderService) {}

    public function sendCallForm(SendCallFormSenderRequest $request)
    {
        $query = $request->validated();

        Mail::to(env("MAIL_TO"))->queue(new CallFormMail($query));

        return response()->json();
    }
    public function test()
    {
        $validatedData = [
            "page" => "contact", // Заполняем страницу
            "topic" => "Support", // Заполняем тему
            'phone' => "+1234567890", // Заполняем телефон
            'email' => "test@example.com", // Заполняем email
            'name' => "Test User", // Заполняем имя
            'message' => "This is a test message", // Заполняем сообщение
            'policy' => true, // Устанавливаем согласие с политикой
        ];


        // Mail::raw("test", fn($mail) => $mail->to("da-datour@yandex.ru"));

        Mail::to("da-datour@yandex.ru")->queue(new CallFormMail($validatedData));

        return response()->json();
    }
}
