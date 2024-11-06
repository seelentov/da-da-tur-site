<?php

namespace App\Repositories\City;

use App\Models\City;
use App\Repositories\Repository;

class CityRepository extends Repository implements ICityRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new City();
    }

    public function getAll()
    {
        return $this->model->all();
    }
}
