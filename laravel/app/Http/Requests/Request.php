<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

abstract class Request extends FormRequest
{
    protected $base_query_rules = [
        "limit" => "integer",
        "offset" => "integer",
    ];

    public function authorize()
    {
        return true;
    }
}
