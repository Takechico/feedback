<?php

namespace App\Modules\Feedback\Exceptions;


use App\Shared\Exceptions\ApiException;

class FeedbackCreateException extends ApiException
{
    public function __construct(string $message = "Creation failed", array $errors = [], int $code = 500)
    {
        parent::__construct($message, $code, null, $errors);
    }

    public function getErrorType(): string
    {
        return 'creation';
    }

    public function getErrors(): array
    {
        return $this->getData();
    }
}
