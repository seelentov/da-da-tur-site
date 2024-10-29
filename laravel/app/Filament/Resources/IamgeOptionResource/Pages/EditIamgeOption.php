<?php

namespace App\Filament\Resources\IamgeOptionResource\Pages;

use App\Filament\Resources\IamgeOptionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditIamgeOption extends EditRecord
{
    protected static string $resource = IamgeOptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
