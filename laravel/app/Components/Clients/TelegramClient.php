<?php


namespace App\Components\Clients;

class TelegramClient extends Client
{
    private $botToken;
    public function __construct()
    {
        $this->botToken = env("TELEGRAM_BOT_TOKEN");

        parent::__construct();
        $this->options["base_uri"] = "https://api.telegram.org/bot{$this->botToken}/sendMessage";
    }

    public function sendMessage(string $chatId, string $text)
    {
        $client = $this->getClient();
        $response = $client->post($this->$this->options["base_uri"], [
            'form_params' => [
                'chat_id' => $chatId,
                'text' => $text,
            ],
        ]);

        return json_decode($response->getBody()->getContents(), true);
    }
}
