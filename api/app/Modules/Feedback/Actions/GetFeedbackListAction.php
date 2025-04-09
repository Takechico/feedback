<?php

namespace App\Modules\Feedback\Actions;

use App\Shared\Actions\Action;
use Illuminate\Support\Collection;
use App\Modules\Feedback\Dto\FilterFeedbacksDto;
use App\Modules\Feedback\Interfaces\IFeedbackRepository;

class GetFeedbackListAction extends Action
{
    public function __construct(
        private readonly IFeedbackRepository $repository
    )
    {
    }

    public function run(FilterFeedbacksDto $dto): Collection
    {
        return $this->repository->getFilteredFeedbacks($dto);
    }
}
