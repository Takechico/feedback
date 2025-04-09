<?php

namespace App\Modules\Feedback\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Shared\Http\Controllers\ApiController;
use App\Modules\Feedback\Dto\FilterFeedbacksDto;
use App\Modules\Feedback\Actions\GetFeedbackListAction;
use App\Modules\Feedback\Http\Resources\FeedbackResource;


class GetFeedbackListController extends ApiController
{
    public function __construct(
        private readonly GetFeedbackListAction $action
    )
    {
    }

    public function get(Request $request): JsonResponse
    {
        $requestData = $request->all();
        $dto = FilterFeedbacksDto::fromArray($requestData);

        $feedbacks = $this->action->run($dto);

        return response()->json([
            'code' => 200,
            'data' => FeedbackResource::collection($feedbacks),
            'message' => 'Feedbacks retrieved successfully'
        ]);
    }
}
