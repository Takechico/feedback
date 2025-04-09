<?php

namespace App\Ship\Exceptions;

use Throwable;
use App\Ship\Facades\DwhLog;
use Illuminate\Http\JsonResponse;
use App\Ship\Parents\Exceptions\BaseException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {

        });
    }

    public function render($request, Throwable $e): JsonResponse
    {
        if ($e instanceof BaseException) {
            return $this->handleBaseException($e);
        }

        return response()->json([
            'status' => 500,
            'error' => 'Internal Server Error',
            'message' => $e->getMessage(),
        ], 500);
    }

    /**
     * Handle custom BaseException and send it to DWH logging.
     */
    private function handleBaseException(BaseException $exception): JsonResponse
    {
        $dwhLogValue = $exception->getLogValue();
        DwhLog::log($dwhLogValue);

        return response()->json([
            'code' => $exception->getCode(),
            'response' => $dwhLogValue->message,
        ], $exception->getCode());
    }
}
