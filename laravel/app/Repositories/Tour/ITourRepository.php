<?php

namespace App\Repositories\Tour;


interface ITourRepository
{
    public function get($filter = null, $limit = null, $offset = null,$hide_dubles = false);
    public function getBySlug($slug);
}
