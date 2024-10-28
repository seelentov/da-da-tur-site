<?php

namespace App\Http\Controllers;

use App\Http\Requests\Subscriber\StoreSubscriberRequest;
use App\Repositories\Subscriber\SubscriberRepository;

class SubscriberController extends Controller
{
    public function __construct(private SubscriberRepository $subscriberRepository) {}
    public function store(StoreSubscriberRequest $request)
    {

        $data = $request->validated();

        return response()->json($this->subscriberRepository->create($data));
    }
}
