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
        return  [
            "page" => "required|string",
            "topic" => "string",
            'phone' => 'required|string',
            'email' => 'string',
            'name' => 'string',
            'message' => 'string',
            'policy' => 'boolean',
        ];
    }
}
