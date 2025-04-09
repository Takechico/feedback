<?php

use Illuminate\Foundation\Application;
use App\Shared\Exceptions\ApiExceptionHandler;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [
            //cuz we dont use auth
            'api/*',
        ]);
    })
    ->withSingletons([
        ExceptionHandler::class => ApiExceptionHandler::class
    ])
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
