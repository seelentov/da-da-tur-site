<?php

namespace App\Components\Clients;

use GuzzleHttp\Client as BaseClient;

abstract class Client
{
    protected $options;
    protected $baseUri;

    public function __construct()
    {
        $this->options = [
            "timeout" => 10.0,
            'verify' => base_path() . '/cacert.pem'
        ];
    }

    public function getClient()
    {
        return new BaseClient($this->options);
    }
}