<?php

namespace App\Modules\Feedback\Actions;

use App\Shared\Actions\Action;
use App\Modules\Feedback\Models\Feedback;
use App\Modules\Feedback\Dto\NewFeedbackDto;
use App\Modules\Feedback\Interfaces\IFeedbackRepository;

class CreateFeedbackAction extends Action
{
    public function __construct(
        private readonly IFeedbackRepository $repository
    )
    {
    }

    public function run(NewFeedbackDto $dto): Feedback
    {
        return $this->repository->create($dto);
    }
}
