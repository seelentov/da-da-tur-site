<?php

namespace App\Repositories\Tour;


interface ITourRepository
{
    public function get($filter = null, $limit = null, $offset = null);
    public function getBySlug($slug);
}
