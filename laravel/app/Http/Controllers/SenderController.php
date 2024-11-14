<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sender\SendReviewSenderRequest;
use App\Http\Requests\Sender\SendCallFormSenderRequest;
use App\Jobs\ThrowTelegramCallForm;
use App\Services\TelegramSenderService\TelegramSenderService;
use Illuminate\Support\Facades\Queue;

class SenderController extends Controller
{
    public function __construct(private TelegramSenderService $telegramSenderService) {}

    public function sendCallForm(SendCallFormSenderRequest $request)
    {
        $query = $request->validated();

        ThrowTelegramCallForm::dispatch($query);

        return response()->json(200);
    }
    public function test()
    {

        mail("komkov222111@gmail.com", "subject", "message");
        return response()->json(200);
    }
}
