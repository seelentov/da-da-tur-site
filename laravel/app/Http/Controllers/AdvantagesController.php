<?php

namespace App\Http\Controllers;

use App\Repositories\Advantage\AdvantageRepository;

class AdvantagesController extends Controller
{
    public function __construct(private AdvantageRepository $advantagesRepository) {}
    public function index()
    {
        return response()->json($this->advantagesRepository->getAll());
    }
}
