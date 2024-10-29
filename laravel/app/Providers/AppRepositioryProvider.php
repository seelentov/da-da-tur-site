<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppRepositioryProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            \App\Repositories\Advantage\IAdvantageRepository::class,
            \App\Repositories\Advantage\AdvantageRepository::class
        );

        $this->app->bind(
            \App\Repositories\Banner\IBannerRepository::class,
            \App\Repositories\Banner\BannerRepository::class
        );

        $this->app->bind(
            \App\Repositories\Category\ICategoryRepository::class,
            \App\Repositories\Category\CategoryRepository::class
        );

        $this->app->bind(
            \App\Repositories\Option\IOptionRepository::class,
            \App\Repositories\Option\OptionRepository::class
        );

        $this->app->bind(
            \App\Repositories\Review\IReviewRepository::class,
            \App\Repositories\Review\ReviewRepository::class
        );

        $this->app->bind(
            \App\Repositories\Social\ISocialRepository::class,
            \App\Repositories\Social\SocialRepository::class
        );

        $this->app->bind(
            \App\Repositories\Subscriber\ISubscriberRepository::class,
            \App\Repositories\Subscriber\SubscriberRepository::class
        );

        $this->app->bind(
            \App\Repositories\Tour\ITourRepository::class,
            \App\Repositories\Tour\TourRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
