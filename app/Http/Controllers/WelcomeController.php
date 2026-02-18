<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'projects' => Project::where('status', 'published')->orderBy('sort_order')->get(),
            'skills' => Skill::orderBy('sort_order')->get(),
            'experiences' => Experience::orderBy('sort_order')->get(),
        ]);
    }
}
