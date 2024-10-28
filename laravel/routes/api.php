<?php

use App\Http\Controllers\AdvantagesController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TourController;
use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::group([
        "prefix" => "advantage"
    ], function () {
        Route::get("", [AdvantagesController::class, "index"]);
    });
    Route::group([
        "prefix" => "banner"
    ], function () {
        Route::get("", [BannerController::class, "index"]);
    });
    Route::group([
        "prefix" => "category"
    ], function () {
        Route::get("", [CategoryController::class, "index"]);
        Route::get("{slug}", [CategoryController::class, "show"]);
    });
    Route::group([
        "prefix" => "option"
    ], function () {
        Route::get("", [OptionController::class, "index"]);
        Route::get("{category}", [OptionController::class, "show"]);
    });
    Route::group([
        "prefix" => "review"
    ], function () {
        Route::get("", [ReviewController::class, "index"]);
    });
    Route::group([
        "prefix" => "social"
    ], function () {
        Route::get("", [SocialController::class, "index"]);
        Route::get("{place}", [SocialController::class, "show"]);
    });
    Route::group([
        "prefix" => "subscriber"
    ], function () {
        Route::post("", [SubscriberController::class, "store"]);
    });
    Route::group([
        "prefix" => "tour"
    ], function () {
        Route::post("", [TourController::class, "index"]);
    });
});
