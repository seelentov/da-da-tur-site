<?php

namespace App\Http\Requests\Tour;

use App\Http\Requests\Request;

abstract class TourRequest extends Request
{
    protected $query_rules;
    public function __construct()
    {
        $this->query_rules = array_merge(
            $this->base_query_rules,
            [
                'category' => 'string',
                'name' => 'string',
                'text' => 'string',
                'slug' => 'string',
                'last_minute_deal' => 'boolean',
                'city' => 'string',
            ]
        );
    }
}
