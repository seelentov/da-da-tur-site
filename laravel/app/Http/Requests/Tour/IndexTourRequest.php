<?php

namespace App\Http\Requests\Tour;

class IndexTourRequest extends TourRequest
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
