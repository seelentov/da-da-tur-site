<?php

namespace App\Http\Controllers;

use App\Repositories\City\CityRepository;

class CityController extends Controller
{
    public function __construct(private CityRepository $cityRepository) {}
    public function index()
    {
        $data = $this->cityRepository->getAll();

        return response()->json($data);
    }
}
