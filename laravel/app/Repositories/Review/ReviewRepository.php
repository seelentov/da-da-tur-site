<?php

namespace App\Repositories\Review;


use App\Models\Review;

class ReviewRepository implements IReviewRepository
{
    protected $model = new Review();

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
