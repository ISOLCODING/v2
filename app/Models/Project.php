<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'full_description',
        'image_url',
        'project_url',
        'github_url',
        'featured',
        'status',
        'sort_order',
        'project_date',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'project_date' => 'date',
    ];

    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }
}
