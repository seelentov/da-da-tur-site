<?php

namespace App\Http\Requests\Sender;

class SendCallFormSenderRequest extends SenderRequest
{
    public function __construct()
    {
        parent::__construct();
    }
    public function rules()
    {
        return array_merge($this->base_rules, [
            "page" => "required|string",
            "topic" => "string"
        ]);
    }
}
