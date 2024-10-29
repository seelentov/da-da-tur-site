<?php

namespace App\Repositories\Subscriber;


use App\Models\Subscriber;
use App\Repositories\Repository;

class SubscriberRepository extends Repository implements ISubscriberRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = new Subscriber();
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function getThrowable()
    {
        return $this->model->where("throw_message", true)->get();
    }
    public function create(string $email, bool $throwable = true)
    {
        return $this->model->create([
            "email" => $email,
            "throw_message" => $throwable
        ]);
    }
}
