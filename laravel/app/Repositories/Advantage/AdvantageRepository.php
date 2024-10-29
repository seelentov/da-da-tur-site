<?php

namespace App\Repositories\Advantage;


use App\Models\Advantage;
use App\Repositories\Repository;

class AdvantageRepository extends Repository implements IAdvantageRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Advantage();
    }

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
