<?php

namespace App\Http\Requests\Sender;

use App\Http\Requests\Request;

abstract class SenderRequest extends Request
{
    protected $base_rules = [
        'phone' => 'required|string',
        'email' => 'string',
        'name' => 'string',
        'message' => 'string',
        'policy' => 'boolean',
    ];
    public function __construct() {}
}
