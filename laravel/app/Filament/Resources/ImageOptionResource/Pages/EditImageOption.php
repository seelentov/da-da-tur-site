<?php

namespace App\Filament\Resources\ImageOptionResource\Pages;

use App\Filament\Resources\ImageOptionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditImageOption extends EditRecord
{
    protected static string $resource = ImageOptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
