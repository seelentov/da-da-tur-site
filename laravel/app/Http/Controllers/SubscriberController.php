<?php

namespace App\Http\Controllers;

use App\Components\Clients\TelegramClient;
use App\Http\Requests\Subscriber\StoreSubscriberRequest;
use App\Jobs\ThrowTelegramSubscriber;
use App\Mail\SubscribeMail;
use App\Repositories\Subscriber\SubscriberRepository;
use App\Services\TelegramSenderService\TelegramSenderService;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;

class SubscriberController extends Controller
{
    public function __construct(
        private SubscriberRepository $subscriberRepository,
        private TelegramSenderService $telegramSenderService
    ) {}
    public function store(StoreSubscriberRequest $request)
    {

        $data = $request->validated();

        $this->subscriberRepository->create($data["email"]);

        Mail::to(env("MAIL_TO"))->queue(new SubscribeMail(["email" => $data["email"]]));

        return response()->json(200);
    }
}
