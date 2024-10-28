<?php

namespace App\Http\Controllers;

use App\Repositories\Option\OptionRepository;

class OptionController extends Controller
{
    public function __construct(private OptionRepository $optionRepository) {}
    public function index()
    {
        return response()->json($this->optionRepository->getAll());
    }

    public function show($category)
    {
        return response()->json($this->optionRepository->getByCategory($category));
    }
}
