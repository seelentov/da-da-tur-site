<?php

namespace App\Http\Requests\Option;

use App\Http\Requests\Request;

abstract class OptionRequest extends Request
{
    protected $query_rules;
    public function __construct()
    {
        $this->query_rules =
            [
                'category' => 'array',
                'category.*' => 'string',
            ];
    }
}
