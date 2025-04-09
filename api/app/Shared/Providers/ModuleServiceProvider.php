<?php

namespace App\Shared\Providers;

use App\Modules\Feedback\Interfaces\IFeedbackRepository;
use App\Modules\Feedback\Repositories\FeedbackRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Module service provider class.
 *
 * For my idea, it will be responsible for resolving different
 * interfaces in our Modules. We can simply bind it.
 *
 * Its basic variant, we will place all interfaces and implementations here from different modules.
 * But we can improve structure, and create Provider inside each module, and change this
 * to abstract with predefined functionality
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $toBind = [
            IFeedbackRepository::class => FeedbackRepository::class,
        ];

        foreach ($toBind as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
