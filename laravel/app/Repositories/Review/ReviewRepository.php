<?php

namespace App\Repositories\Review;


use App\Models\Review;
use App\Repositories\Repository;

class ReviewRepository extends Repository implements IReviewRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Review();
    }

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
