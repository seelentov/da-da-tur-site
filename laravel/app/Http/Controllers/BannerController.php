<?php

namespace App\Http\Controllers;

use App\Repositories\Advantage\AdvantageRepository;
use App\Repositories\Banner\BannerRepository;

class BannerController extends Controller
{
    public function __construct(private BannerRepository $bannerRepository) {}
    public function index()
    {
        return response()->json($this->bannerRepository->getAll());
    }
}
