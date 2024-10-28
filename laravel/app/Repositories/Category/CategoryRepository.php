<?php

namespace App\Repositories\Category;

use App\Http\Filters\TourFilter;
use App\Models\Category;

class CategoryRepository implements ICategoryRepository
{
    protected $model = new Category();

    public function getAll()
    {
        return $this->model->all();
    }

    public function getBySlug($slug)
    {
        return $this->model->where("slug", $slug)->with("tours")->first();
    }
}
