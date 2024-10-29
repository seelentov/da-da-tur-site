<?php

namespace App\Repositories\Option;


interface IOptionRepository
{
    public function getAll($filter = null);
    public function getByCategory(string $category);
}
