<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tour\IndexTourRequest;
use App\Repositories\Category\CategoryRepository;

class CategoryController extends Controller
{
    public function __construct(private CategoryRepository $categoryRepository) {}
    public function index(IndexTourRequest $request)
    {
        $data = $this->categoryRepository->getAll();

        return response()->json($data);
    }

    public function show($slug)
    {
        $data = $this->categoryRepository->getBySlug($slug);
        return response()->json($data);
    }
}
