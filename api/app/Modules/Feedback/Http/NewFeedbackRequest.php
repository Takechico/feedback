<?php

namespace App\Modules\Feedback\Http;

use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use App\Modules\Feedback\Exceptions\NewFeedbackValidationException;

class NewFeedbackRequest extends FormRequest
{
    public function authorize(): true
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'message' => 'required|string',
            'rating' => 'required|integer|between:1,5',
            'customer_name' => 'required|string',
        ];
    }

    /**
     * @throws NewFeedbackValidationException
     */
    protected function failedValidation(Validator $validator): JsonResponse
    {
        $errors = (new ValidationException($validator))->errors();

        throw new NewFeedbackValidationException(
            'Failed to validate new feedback request',
            $errors,
            403);
    }

}
