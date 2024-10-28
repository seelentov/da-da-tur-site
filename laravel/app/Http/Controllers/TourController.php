<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tour\IndexTourRequest;
use App\Repositories\Tour\TourRepository;

class TourController extends Controller
{
    public function __construct(private TourRepository $tourRepository) {}
    public function index(IndexTourRequest $request)
    {
        $data = $this->tourRepository->get(
            $request->validated(),
            $request->query('limit'),
            $request->query('offset')
        );

        return response()->json($data);
    }

    public function show($slug)
    {
        $data = $this->tourRepository->getBySlug($slug);
        return response()->json($data);
    }
}
