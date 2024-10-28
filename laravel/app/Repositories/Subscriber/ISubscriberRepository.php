<?php

namespace App\Repositories\Subscriber;


interface ISubscriberRepository
{
    public function getAll();
    public function getThrowable();
    public function create(string $email, bool $throwable = true);
}
