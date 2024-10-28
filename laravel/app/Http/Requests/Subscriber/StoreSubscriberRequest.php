<?php

namespace App\Http\Requests\Subscriber;

class StoreSubscriberRequest extends SubscriberRequest
{
    public function __construct()
    {
        parent::__construct();
    }
    public function rules()
    {
        return $this->mutation_rules;
    }
}
