<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'type',
        'title',
        'company',
        'description',
        'formatted_date', // virtual attribute if needed
        'location',
        'start_date',
        'end_date',
        'is_current',
        'sort_order',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_current' => 'boolean',
    ];
}
