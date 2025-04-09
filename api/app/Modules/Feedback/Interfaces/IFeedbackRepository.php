<?php

namespace App\Modules\Feedback\Interfaces;

use Illuminate\Support\Collection;
use App\Modules\Feedback\Models\Feedback;
use App\Modules\Feedback\Dto\NewFeedbackDto;
use App\Modules\Feedback\Dto\FilterFeedbacksDto;

/**
 * Repository interface for working with feedback table.
 */
interface IFeedbackRepository
{
    public function create(NewFeedbackDto $dto): Feedback;

    public function getFilteredFeedbacks(FilterFeedbacksDto $dto): Collection;
}
