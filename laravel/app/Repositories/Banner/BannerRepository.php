<?php

namespace App\Repositories\Banner;


use App\Models\Banner;

class BannerRepository implements IBannerRepository
{
    protected $model = new Banner();

    public function getAll()
    {
        return $this->model->orderBy("position", "ASC")->get();
    }
}
