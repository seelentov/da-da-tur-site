<?php

namespace App\Repositories\Social;


use App\Models\Social;
use App\Repositories\Repository;

class SocialRepository extends Repository implements ISocialRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Social();
    }

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }

    public function getByPlace($place): mixed
    {
        return $this->model->where($place, true)->orderBy("position", "ASC")->get();
    }
}
