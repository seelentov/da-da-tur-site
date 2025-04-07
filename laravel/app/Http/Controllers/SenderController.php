<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sender\SendCallFormSenderRequest;
use App\Mail\CallFormMail;
use App\Services\TelegramSenderService\TelegramSenderService;
use Illuminate\Support\Facades\Mail;

class SenderController extends Controller
{
    public function __construct(
        private TelegramSenderService $telegramSenderService
        ) {}

    public function sendCallForm(SendCallFormSenderRequest $request)
    {
        $query = $request->validated();

        $this->telegramSenderService->sendCallForm($query);

        return response()->json();
    }
}
