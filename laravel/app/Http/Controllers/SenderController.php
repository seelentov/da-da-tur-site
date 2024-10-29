<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sender\SendReviewSenderRequest;
use App\Http\Requests\Sender\SendCallFormSenderRequest;
use App\Service\TelegramSenderService\TelegramSenderService;

class SenderController extends Controller
{
    public function __construct(private TelegramSenderService $telegramSenderService) {}
    public function sendReview(SendReviewSenderRequest $request)
    {
        $query = $request->validated();

        $this->telegramSenderService->sendReview(
            name: $query["name"],
            email: $query["email"],
            phone: $query["phone"],
            stars: $query["stars"],
            message: $query["message"],
            policy: $query["policy"],
        );

        return response()->json(200);
    }

    public function sendCallForm(SendCallFormSenderRequest $request)
    {
        $query = $request->validated();

        $this->telegramSenderService->sendCallForm(
            name: $query["name"],
            email: $query["email"],
            phone: $query["phone"],
            topic: $query["topic"],
            message: $query["message"],
            policy: $query["policy"],
            page: $query["page"],
        );

        return response()->json(200);
    }
}
