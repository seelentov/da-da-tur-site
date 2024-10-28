<?php

namespace App\Http\Controllers;

use App\Repositories\Review\ReviewRepository;

class ReviewController extends Controller
{
    public function __construct(private ReviewRepository $reviewRepository) {}
    public function index()
    {
        return response()->json($this->reviewRepository->getAll());
    }
}
