<?php

namespace App\Repositories\Social;


use App\Models\Social;

class SocialRepository implements ISocialRepository
{
    protected $model = new Social();

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }

    public function getByPlace($place): mixed
    {
        return $this->model->where($place, true)->orderBy("position", "ASC")->get();
    }
}
