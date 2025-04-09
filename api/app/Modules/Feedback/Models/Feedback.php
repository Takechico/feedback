<?php

namespace App\Modules\Feedback\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Main model of application which represents user feedback.
 * @property int $id
 * @property int $rating
 * @property string $message
 * @property string $created_at
 * @property string $customer_name
 */
class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = null;

    protected $fillable = [
        'rating',
        'message',
        'customer_name'
    ];
}
