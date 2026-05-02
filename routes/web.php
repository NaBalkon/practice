<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstateController;
Route::get('/estates', [EstateController::class, 'index'])->name('estates.index');
Route::post('/estates', [EstateController::class, 'store'])->name('estates.store');
Route::inertia('/', 'welcome')->name('home');
