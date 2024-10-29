<?php


namespace App\Http\Filters;

use App\Http\Filters\Abstract\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class OptionFilter extends AbstractFilter
{
    public const CATEGORY = 'category';

    protected function getCallbacks(): array
    {
        return [
            self::CATEGORY => [$this, 'category'],
        ];
    }

    public function category(Builder $builder, array $value)
    {
        $builder->whereIn('category', $value);
    }
}
