<?php

namespace App\Http\Controllers;

use App\Repositories\Social\SocialRepository;

class SocialController extends Controller
{
    public function __construct(private SocialRepository $socialRepository) {}
    public function index()
    {
        return response()->json($this->socialRepository->getAll());
    }
}
