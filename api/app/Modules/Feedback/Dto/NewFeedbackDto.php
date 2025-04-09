<?php

namespace App\Modules\Feedback\Dto;

use App\Shared\Dto\Dto;
use Illuminate\Http\Request;

/**
 * Data transfer object for creating new feedback entity.
 */
class NewFeedbackDto extends Dto
{
    const KEYS = ['rating', 'message', 'customer_name'];

    public function __construct(
        public int    $rating,
        public string $message,
        public string $customer_name,
    )
    {
    }

    public static function fromArray(array $data): NewFeedbackDto
    {
        //array validation before create object
        self::validateArray(self::KEYS, $data);

        return new self(
            $data['rating'],
            $data['message'],
            $data['customer_name'],
        );
    }

    /**
     * Creates object from validated request using array func.
     * @param Request $request
     * @return NewFeedbackDto
     */
    public static function fromRequest(Request $request): NewFeedbackDto
    {
        return self::fromArray($request->validated());
    }
}
