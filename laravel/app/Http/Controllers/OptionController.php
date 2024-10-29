<?php

namespace App\Http\Controllers;

use App\Http\Requests\Option\IndexOptionRequest;
use App\Repositories\Option\OptionRepository;

class OptionController extends Controller
{
    public function __construct(private OptionRepository $optionRepository) {}
    public function index(IndexOptionRequest $request)
    {

        $query = $request->validated();

        return response()->json(
            $this->optionRepository->getAll($query)
        );
    }

    public function show($category)
    {
        return response()->json($this->optionRepository->getByCategory($category));
    }
}
