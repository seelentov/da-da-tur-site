<?php

namespace App\Filament\Resources\ImageOptionResource\Pages;

use App\Filament\Resources\ImageOptionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListImageOptions extends ListRecords
{
    protected static string $resource = ImageOptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
