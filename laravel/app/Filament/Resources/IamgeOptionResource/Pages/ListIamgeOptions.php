<?php

namespace App\Filament\Resources\IamgeOptionResource\Pages;

use App\Filament\Resources\IamgeOptionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListIamgeOptions extends ListRecords
{
    protected static string $resource = IamgeOptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
