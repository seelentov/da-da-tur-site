<?php

namespace App\Repositories\Social;


interface ISocialRepository
{
    public function getAll();
    public function getByPlace($place);
}
