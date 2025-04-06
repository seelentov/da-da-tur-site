<?php

namespace App\Repositories\Tour;

use App\Http\Filters\TourFilter;
use App\Models\Tour;
use App\Repositories\Repository;

class TourRepository  extends Repository implements ITourRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Tour();
    }

    public function get($filter = null, $limit = null, $offset = null, $hide_dubles = false)
        {
    $query = $this->model->select('tours.*', 'tour_dates.start_date', 'tour_dates.end_date')
        ->rightJoin('tour_dates', 'tours.id', '=', 'tour_dates.tour_id')
        ->orderBy('tour_dates.start_date', 'ASC') // Сортировка по дате начала
        ->orderBy('tours.position', 'ASC'); // Дополнительная сортировка по позиции

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

    if ($hide_dubles){
        $data = $query->get()->toArray();

        $uniqueItems = [];
    
    foreach ($data as $item) {
        if (!isset($item['id'])) {
            continue;
        }
        
        $id = $item['id'];
        if (!isset($uniqueItems[$id])) {
            $uniqueItems[$id] = $item;
        }
    }
    $filteredArray = array_values($uniqueItems);
    
    usort($filteredArray, function($a, $b) {
        return $a['position'] <=> $b['position'];
    });

    return array_values($filteredArray);

    }
    return $query->get();
}

public function getBySlug($slug)
{
    $tour = $this->model->with(['dates' => function($query) {
            $query->orderBy('start_date', 'ASC');
        }])
        ->where("slug", $slug)
        ->first();

    return $tour;
}
}
