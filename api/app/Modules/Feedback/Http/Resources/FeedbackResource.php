<?php

namespace App\Modules\Feedback\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
{
    /**
     * Transform the model into an array.
     * Can change name of fields or not return everything.
     * @param Request $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'rating' => $this->rating,
            'message' => $this->message,
            'created_at' => $this->created_at,
            'customer_name' => $this->customer_name
        ];
    }
}
