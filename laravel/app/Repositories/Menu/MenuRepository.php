<?php

namespace App\Repositories\Menu;

use App\Models\Menu;
use App\Repositories\Repository;

class MenuRepository extends Repository implements IMenuRepository
{
    protected $model;
    public function __construct()
    {
        $this->model = new Menu();
    }

    public function getAll()
    {
        $menuItems = $this->model->orderBy("position", "ASC")->get()->toArray();

        $newMenuItems = [];

        foreach ($menuItems as $key => $item) {
            if ($item['parent_id'] === null) {
                $item['childrens'] = [];
                foreach ($menuItems as $childKey => $child) {
                    if ($child['parent_id'] === $item['id']) {
                        $item['childrens'][] = $child;
                        unset($menuItems[$childKey]);
                    }
                }
                $newMenuItems[] = $item;
            }
        }

        foreach ($menuItems as $item) {
            if ($item['parent_id'] !== null) {
                $newMenuItems[] = $item;
            }
        }

        return $newMenuItems;
    }
}
