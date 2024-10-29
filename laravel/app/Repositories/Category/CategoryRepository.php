<?php

namespace App\Repositories\Category;

use App\Http\Filters\TourFilter;
use App\Models\Category;
use App\Repositories\Repository;

class CategoryRepository extends Repository implements ICategoryRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Category();
    }
    public function getAll()
    {
        return $this->model->all();
    }

    public function getBySlug($slug)
    {
        return $this->model->where("slug", $slug)->with("tours")->first();
    }
}
