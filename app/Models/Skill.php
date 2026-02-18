<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'category',
        'proficiency',
        'icon_class',
        'color',
        'sort_order',
        'is_featured',
        'description',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
