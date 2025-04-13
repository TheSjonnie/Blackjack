<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\BlackjackProfileService;
class BlackjackServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(BlackjackProfileService::class, function () {
            return new BlackjackProfileService();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
