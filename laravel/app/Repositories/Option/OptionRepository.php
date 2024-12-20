<?php

namespace App\Repositories\Option;

use App\Http\Filters\OptionFilter;
use App\Models\ImageOption;
use App\Models\Option;
use App\Repositories\Repository;

class OptionRepository extends Repository implements IOptionRepository
{
    protected $model;
    protected $model2;

    public function __construct()
    {
        $this->model = new Option();
        $this->model2 = new ImageOption();
    }

    public function getAll($filter = null)
    {
        $query = $this->model;
        $query2 = $this->model2;

        if ($filter !== null) {
            $filter = app()->make(OptionFilter::class, ["queryParams" => $filter]);


            $query = $query->filter($filter);
            $query2 = $query2->filter($filter);
        }
        $query = $query->get();
        $query2 = $query2->get()->map(function ($item) {
            $item->id *= -1;
            return $item;
        });

        return $this->arrayToKeyValue($query->merge($query2)->toArray());
    }

    public function getByCategory(string $category)
    {
        $query = $this->model->where("category", $category)->get();
        $query2 = $this->model2->where("category", $category)->get()->map(function ($item) {
            $item->id *= -1;
            return $item;
        });

        return  $this->arrayToKeyValue($query->merge($query2)->toArray());
    }

    private function arrayToKeyValue(array $array)
    {
        $res = [];

        foreach ($array as $item) {
            $res[$item['key']] = $item['value'];
        }

        return $res;
    }
}
