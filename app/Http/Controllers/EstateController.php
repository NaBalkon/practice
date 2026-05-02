<?php

namespace App\Http\Controllers;

use App\Models\Estate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstateController extends Controller
{
    public function index()
    {
        return Inertia::render('Estates/Index', [
            'estates' => Estate::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'area_sqm' => 'required|integer|min:10',
        ]);

        Estate::create($validated);
        return redirect()->back();
    }
}