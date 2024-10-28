<?php

namespace App\Repositories\Subscriber;


use App\Models\Subscriber;

class SubscriberRepository implements ISubscriberRepository
{
    protected $model = new Subscriber();

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
