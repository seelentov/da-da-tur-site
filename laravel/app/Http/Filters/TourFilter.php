<?php


namespace App\Http\Filters;

use App\Http\Filters\Abstract\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class TourFilter extends AbstractFilter
{
    public const CATEGORY = 'category';
    public const NAME = 'name';
    public const TEXT = 'text';
    public const LAST_MINUTE_DEAL = 'last_minute_deal';
    public const SLUG = 'slug';


    protected function getCallbacks(): array
    {
        return [
            self::CATEGORY => [$this, 'category'],
            self::NAME => [$this, 'name'],
            self::TEXT => [$this, 'text'],
            self::LAST_MINUTE_DEAL => [$this, 'last_minute_deal'],
            self::SLUG => [$this, 'slug'],
        ];
    }

    public function category(Builder $builder, $value)
    {
        $builder->whereHas('category', function ($q) use ($value) {
            $q->where('slug', $value);
        });
    }

    public function name(Builder $builder, $value)
    {
        $builder->where('name', "ilike", '%' . $value . '%');
    }

    public function text(Builder $builder, $value)
    {
        $builder->where('text', "ilike", '%' . $value . '%')->orWhere('description', "ilike", '%' . $value . '%');
    }

    public function last_minute_deal(Builder $builder, $value)
    {
        $builder->where('last_minute_deal', $value);
    }

    public function slug(Builder $builder, $value)
    {
        $builder->where('slug', $value);
    }
}
