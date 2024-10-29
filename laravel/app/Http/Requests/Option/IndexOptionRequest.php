<?php

namespace App\Http\Requests\Option;

class IndexOptionRequest extends OptionRequest
{
    public function __construct()
    {
        parent::__construct();
    }
    public function rules()
    {
        return $this->query_rules;
    }
}
