<?php

namespace App\Shared\Exceptions;

use Exception;

/**
 * Base exception for our API. If wanted, we can define
 * here different behaviour
 */
abstract class ApiException extends Exception
{
    protected array $data = [];

    public function __construct(string $message = "", int $code = 500, Exception $previous = null, array $data = [])
    {
        parent::__construct($message, $code, $previous);
        $this->data = $data;
    }

    public function getData(): array
    {
        return $this->data;
    }

    // Here we can define our error types
    abstract public function getErrorType(): string;

    // Here we formating our errors
    abstract public function getErrors(): array;
}
