<?php

namespace App\Repositories\Advantage;


use App\Models\Advantage;

class AdvantageRepository implements IAdvantageRepository
{
    protected $model = new Advantage();

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
