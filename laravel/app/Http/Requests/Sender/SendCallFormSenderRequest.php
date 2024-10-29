<?php

namespace App\Http\Requests\Sender;

use App\Http\Requests\Request;

abstract class SendCallFormSenderRequest extends Request
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
