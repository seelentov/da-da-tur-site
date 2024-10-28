<?php

namespace App\Repositories\Category;


interface ICategoryRepository
{
    public function getAll();
    public function getBySlug($slug);
}
