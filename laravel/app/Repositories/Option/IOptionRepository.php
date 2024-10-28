<?php

namespace App\Repositories\Option;


interface IOptionRepository
{
    public function getAll();
    public function getByCategory(string $category);
}
