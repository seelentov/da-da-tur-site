<?php

namespace App\Repositories\Banner;


use App\Models\Banner;
use App\Repositories\Repository;

class BannerRepository extends Repository implements IBannerRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Banner();
    }

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
