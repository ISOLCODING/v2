<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Project;
use App\Models\Skill;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Skills
        Skill::firstOrCreate(['name' => 'Laravel'], ['category' => 'backend', 'icon_class' => 'fab fa-laravel', 'color' => 'red', 'proficiency' => 90]);
        Skill::firstOrCreate(['name' => 'React'], ['category' => 'frontend', 'icon_class' => 'fab fa-react', 'color' => 'blue', 'proficiency' => 85]);
        Skill::firstOrCreate(['name' => 'Tailwind CSS'], ['category' => 'frontend', 'icon_class' => 'fas fa-wind', 'color' => 'teal', 'proficiency' => 95]);
        Skill::firstOrCreate(['name' => 'MySQL'], ['category' => 'database', 'icon_class' => 'fas fa-database', 'color' => 'orange', 'proficiency' => 80]);

        // Projects
        Project::firstOrCreate(['slug' => 'e-learning-platform'], [
            'title' => 'E-Learning Platform',
            'description' => 'A comprehensive LMS built with Laravel and Vue.js.',
            'featured' => true,
            'status' => 'published',
            'technologies' => 'Laravel, Vue.js, MySQL',
            'image_url' => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'project_url' => 'https://example.com',
            'github_url' => 'https://github.com/example/lms'
        ]);

        Project::firstOrCreate(['slug' => 'portfolio-v1'], [
            'title' => 'Portfolio V1',
            'description' => 'My previous portfolio website.',
            'featured' => false,
            'status' => 'archived',
            'technologies' => 'HTML, CSS, PHP',
            'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]);
        
        Project::firstOrCreate(['slug' => 'saas-dashboard'], [
            'title' => 'SaaS Dashboard',
            'description' => 'Modern analytical dashboard for SaaS applications.',
            'featured' => true,
            'status' => 'published',
            'technologies' => 'React, Tailwind, Node.js',
            'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]);
    }
}
