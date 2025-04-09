<?php

namespace App\Modules\Feedback\Repositories;

use Illuminate\Support\Collection;
use App\Modules\Feedback\Models\Feedback;
use App\Modules\Feedback\Dto\NewFeedbackDto;
use App\Modules\Feedback\Dto\FilterFeedbacksDto;
use App\Modules\Feedback\Interfaces\IFeedbackRepository;
use App\Modules\Feedback\Exceptions\FeedbackCreateException;

class FeedbackRepository implements IFeedbackRepository
{
    /**
     * @throws FeedbackCreateException
     */
    public function create(NewFeedbackDto $dto): Feedback
    {
        $newFeedback = new Feedback();
        $newFeedback->message = $dto->message;
        $newFeedback->rating = $dto->rating;
        $newFeedback->customer_name = $dto->customer_name;

        if (!$newFeedback->save()) {
            //can define here more detailed errors output
            throw new FeedbackCreateException(FeedbackRepository::class, ['data' => []]);
        }

        return $newFeedback;
    }

    public function getFilteredFeedbacks(FilterFeedbacksDto $dto): Collection
    {
        $feedbackQuery = Feedback::query();

        if ($dto->rating) {
            $feedbackQuery->where('rating', $dto->rating);
        }

        return $feedbackQuery
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();
    }
}
