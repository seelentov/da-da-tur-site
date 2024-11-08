<?php

namespace App\Jobs;

use App\Services\TelegramSenderService\TelegramSenderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;

class ThrowTelegramSubscriber implements ShouldQueue
{
    use Queueable, Dispatchable;

    public function __construct(
        private string $email
    ) {
        $this
            ->onConnection('rabbitmq')
            ->onQueue('default');
    }

    /**
     * Execute the job.
     */
    public function handle(
        TelegramSenderService $telegramSenderService
    ): void {
        $telegramSenderService->sendSubscriber($this->email);
    }
}
