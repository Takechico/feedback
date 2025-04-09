<?php

namespace App\Modules\Feedback\Exceptions;

use App\Shared\Exceptions\ApiException;


class NewFeedbackValidationException extends ApiException
{
    public function __construct(string $message = "Creation failed", array $errors = [], int $code = 500)
    {
        parent::__construct($message, $code, null, $errors);
    }

    public function getErrorType(): string
    {
        return 'validation';
    }

    /**
     * Here we can improve output
     * @return array
     */
    public function getErrors(): array
    {
        return $this->getData();
    }
}
