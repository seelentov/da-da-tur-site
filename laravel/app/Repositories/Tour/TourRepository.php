<?php

namespace App\Repositories\Tour;

use App\Http\Filters\TourFilter;
use App\Models\Tour;

class TourRepository implements ITourRepository
{
    protected $model = new Tour();

    public function get($filter = null, $limit = null, $offset = null)
    {
        $query = $this->model;

        if ($filter !== null) {
            $filter = app()->make(TourFilter::class, ["queryParams" => $filter]);

            $query = $query->filter($filter);
        }

        if ($limit !== null) {
            $query->limit($limit);
        }

        if ($offset !== null) {
            $query->offset($offset);
        }

        return $query->orderBy("position", "ASC")->get();
    }

    public function getBySlug($slug)
    {
        return $this->model->where("slug", $slug)->first();
    }
}
