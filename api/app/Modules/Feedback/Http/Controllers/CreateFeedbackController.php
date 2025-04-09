<?php

namespace App\Modules\Feedback\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Modules\Feedback\Dto\NewFeedbackDto;
use App\Shared\Http\Controllers\ApiController;
use App\Modules\Feedback\Http\NewFeedbackRequest;
use App\Modules\Feedback\Actions\CreateFeedbackAction;
use App\Modules\Feedback\Http\Resources\FeedbackResource;

class CreateFeedbackController extends ApiController
{
    public function __construct(
        private readonly CreateFeedbackAction $action
    )
    {
    }

    public function create(NewFeedbackRequest $request): JsonResponse
    {
        $dto = NewFeedbackDto::fromRequest($request);

        $newFeedback = $this->action->run($dto);

        return response()->json([
            'code' => 200,
            'data' => new FeedbackResource($newFeedback),
            'message' => 'Feedback created successfully'
        ]);
    }
}
