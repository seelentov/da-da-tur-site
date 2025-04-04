<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourResource\Pages;
use App\Filament\Resources\TourResource\RelationManagers;
use App\Models\Tour;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required(),
                Forms\Components\TextInput::make('price')->numeric()->required(),
                Forms\Components\TextInput::make('old_price')->numeric(),
                Forms\Components\RichEditor::make('description'),
                Forms\Components\RichEditor::make('text'),
                Forms\Components\TextInput::make('slug')
                    ->required(),
                Forms\Components\Toggle::make('last_minute_deal'),
                Forms\Components\Toggle::make('popular'),
                Forms\Components\DatePicker::make('start_date')->required(),
                Forms\Components\DatePicker::make('end_date')->required(),
                Forms\Components\FileUpload::make('image_url'),
                Forms\Components\TextInput::make('position')
                    ->numeric()
                    ->minValue(0),
                Forms\Components\Select::make('category_id')
                    ->relationship(name: 'category', titleAttribute: 'name'),

                Forms\Components\Select::make('city_id')
                    ->relationship(name: 'city', titleAttribute: 'name')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('price')
                    ->sortable(),
                Tables\Columns\TextColumn::make('old_price')
                    ->sortable(),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\TextColumn::make('text'),
                Tables\Columns\TextColumn::make('slug'),
                Tables\Columns\IconColumn::make('last_minute_deal')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\IconColumn::make('popular')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\ImageColumn::make('image_url'),
                Tables\Columns\TextColumn::make('position')
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.name')
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

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'description', 'text'];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTours::route('/'),
            'create' => Pages\CreateTour::route('/create'),
            'edit' => Pages\EditTour::route('/{record}/edit'),
        ];
    }
}
