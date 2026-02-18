<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Setting;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json([
            'projects' => Project::with('skills')->where('status', 'published')->orderBy('sort_order')->get(),
            'skills' => Skill::orderBy('sort_order')->get(),
            'experiences' => Experience::orderBy('sort_order')->get(),
            'settings' => Setting::all()->pluck('value', 'key'),
        ]);
    }
}
