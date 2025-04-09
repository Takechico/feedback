<?php

namespace App\Shared\Exceptions;

use Throwable;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Exceptions\Handler;

/**
 * Main exception handler for our application
 */
class ApiExceptionHandler extends Handler
{
    protected $dontReport = [
        //
    ];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->reportable(function (Throwable $e) {

        });
    }

    public function render($request, Throwable $e): JsonResponse
    {
        if ($e instanceof ApiException) {
            return $this->handleBaseException($e);
        }

        return response()->json([
            'status' => 500,
            'error' => 'Internal Server Error',
            'message' => $e->getMessage(),
        ], 500);
    }

    /**
     * Handle our custom exception. Can extend it, if we need.
     */
    private function handleBaseException(ApiException $exception): JsonResponse
    {
        $response = [
            'code' => $exception->getCode(),
            'message' => $exception->getMessage(),
            'type' => $exception->getErrorType(),
            'errors' => $exception->getErrors(),
        ];

        return response()->json($response, $exception->getCode());
    }
}
