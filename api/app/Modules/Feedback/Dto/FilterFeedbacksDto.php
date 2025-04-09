<?php

namespace App\Modules\Feedback\Dto;

use App\Shared\Dto\Dto;
use Illuminate\Http\Request;

/**
 * Data transfer object for filtering feedback lists.
 */
class FilterFeedbacksDto extends Dto
{
    public function __construct(
        public string $rating,
        //can extend later if we wish, and our model will be bigger.
        #public array $customer_names,
    )
    {
    }

    public static function fromArray(array $data): FilterFeedbacksDto
    {
        return new self(
            $data['rating'] ?? '',
        );
    }

    /**
     * Creates object from validated request using array func.
     * @param Request $request
     * @return FilterFeedbacksDto
     */
    public static function fromRequest(Request $request): FilterFeedbacksDto
    {
        return self::fromArray($request->validated());
    }
}
