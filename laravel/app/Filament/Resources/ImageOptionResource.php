<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ImageOptionResource\Pages;
use App\Filament\Resources\ImageOptionResource\RelationManagers;
use App\Models\ImageOption;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ImageOptionResource extends Resource
{
    protected static ?string $model = ImageOption::class;

    protected static ?string $recordTitleAttribute = 'key';
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('key')->required(),
                Forms\Components\FileUpload::make('value')->required(),
                Forms\Components\TextInput::make('category')->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('key'),
                Tables\Columns\ImageColumn::make('value'),
                Tables\Columns\TextColumn::make('category')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListImageOptions::route('/'),
            'create' => Pages\CreateImageOption::route('/create'),
            'edit' => Pages\EditImageOption::route('/{record}/edit'),
        ];
    }
}
