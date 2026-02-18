<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\ExperienceSkill;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin User
        User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]
        );

        // Skills
        Skill::firstOrCreate(['name' => 'Laravel'], ['category' => 'Technology', 'icon_class' => 'fab fa-laravel', 'color' => 'red', 'proficiency' => 90, 'description' => 'Backend Framework']);
        Skill::firstOrCreate(['name' => 'React'], ['category' => 'Technology', 'icon_class' => 'fab fa-react', 'color' => 'blue', 'proficiency' => 85, 'description' => 'Frontend Library']);
        Skill::firstOrCreate(['name' => 'Tailwind CSS'], ['category' => 'Technology', 'icon_class' => 'fas fa-wind', 'color' => 'teal', 'proficiency' => 95, 'description' => 'Utility-first CSS']);
        Skill::firstOrCreate(['name' => 'MySQL'], ['category' => 'Database', 'icon_class' => 'fas fa-database', 'color' => 'orange', 'proficiency' => 80, 'description' => 'Relational Database']);

        // Projects
        Project::firstOrCreate(['slug' => 'e-learning-platform'], [
            'title' => 'E-Learning Platform',
            'description' => 'A comprehensive LMS built with Laravel and Vue.js.',
            'featured' => true,
            'status' => 'published',
            'technologies' => ['Laravel', 'Vue.js', 'MySQL'],
            'image_url' => '', // Add placeholder or leave empty
            'project_url' => 'https://example.com',
            'github_url' => 'https://github.com/example/lms'
        ]);

        Project::firstOrCreate(['slug' => 'portfolio-v1'], [
            'title' => 'Portfolio V1',
            'description' => 'My previous portfolio website.',
            'featured' => false,
            'status' => 'archived',
            'technologies' => ['HTML', 'CSS', 'PHP'],
            'image_url' => ''
        ]);
        
        Project::firstOrCreate(['slug' => 'saas-dashboard'], [
            'title' => 'SaaS Dashboard',
            'description' => 'Modern analytical dashboard for SaaS applications.',
            'featured' => true,
            'status' => 'published',
            'technologies' => ['React', 'Tailwind', 'Node.js'],
            'image_url' => ''
        ]);

        // Experience
        Experience::firstOrCreate(['title' => 'Senior Web Developer'], [
            'company' => 'Tech Solutions Inc.',
            'type' => 'work',
            'location' => 'Remote',
            'description' => 'Leading the backend team and architecting scalable solutions.',
            'start_date' => '2023-01-01',
            'is_current' => true,
            'sort_order' => 1
        ]);

        Experience::firstOrCreate(['title' => 'Full Stack Developer'], [
            'company' => 'Creative Agency',
            'type' => 'work',
            'location' => 'New York, NY',
            'description' => 'Developed client websites and e-commerce platforms.',
            'start_date' => '2020-06-01',
            'end_date' => '2022-12-31',
            'is_current' => false,
            'sort_order' => 2
        ]);

        // Settings
        Setting::firstOrCreate(['key' => 'site_title'], ['value' => 'DevFolio', 'type' => 'text', 'category' => 'general', 'description' => 'Website Title']);
        Setting::firstOrCreate(['key' => 'site_description'], ['value' => 'My Personal Portfolio', 'type' => 'text', 'category' => 'general', 'description' => 'Meta Description']);
        Setting::firstOrCreate(['key' => 'contact_email'], ['value' => 'hello@example.com', 'type' => 'text', 'category' => 'contact', 'description' => 'Contact Email']);
    }
}
