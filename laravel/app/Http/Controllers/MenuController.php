<?php

namespace App\Http\Controllers;

use App\Repositories\Menu\MenuRepository;

class MenuController extends Controller
{
    public function __construct(private MenuRepository $menuRepository) {}
    public function index()
    {

        return response()->json(
            $this->menuRepository->getAll()
        );
    }
}
