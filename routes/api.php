<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ContactController;

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
