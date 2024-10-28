<?php

namespace App\Repositories\Option;


use App\Models\Option;

class OptionRepository implements IOptionRepository
{
    protected $model = new Option();

    public function getAll()
    {
        return $this->model->all();
    }

    public function getByCategory(string $category)
    {
        return $this->model->where("category", $category)->get();
    }
}
