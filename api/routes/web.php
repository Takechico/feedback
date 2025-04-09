<?php

use App\Modules\Feedback\Http\Controllers\CreateFeedbackController;
use App\Modules\Feedback\Http\Controllers\GetFeedbackListController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::post('/feedback', [CreateFeedbackController::class, 'create']);
    Route::get('/feedback', [GetFeedbackListController::class, 'get']);
});
