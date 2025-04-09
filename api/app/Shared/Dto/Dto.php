<?php

namespace App\Shared\Dto;

use Illuminate\Http\Request;
use InvalidArgumentException;

/**
 * Abstract class for data transfer object.
 */
abstract class Dto
{
    /**
     * Adding also validation for array, cuz we can create them without
     * request. We need additional checks.
     * @param array $requiredKeys
     * @param array $data
     * @return void
     */
    protected static function validateArray(array $requiredKeys, array $data): void
    {
        foreach ($requiredKeys as $key) {
            if (!array_key_exists($key, $data)) {
                throw new InvalidArgumentException("Missing array key: '{$key}'");
            }
        }
    }

    /**
     * Useful for creating DTO from array, cuz we can
     * create it for example in commands.
     * @param array $data
     * @return Dto
     */
    abstract static function fromArray(array $data): Dto;

    /**
     * Creates DTO from http request.
     * @param Request $request
     * @return Dto
     */
    abstract static function fromRequest(Request $request): Dto;

}
