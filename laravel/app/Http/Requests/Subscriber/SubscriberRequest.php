<?php

namespace App\Http\Requests\Subscriber;

use App\Http\Requests\Request;

abstract class SubscriberRequest extends Request
{
    protected $mutation_rules = [
        'email' => 'string|required|email|unique:subscribers,email',
        'throw_message' => 'boolean'
    ];
    protected $query_rules;
    public function __construct()
    {
        $this->query_rules = array_merge(
            $this->base_query_rules,
            [
                //
            ]
        );
    }
}
