<?php

namespace App\Http\Controllers;

use App\Models\TodoDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $search = TodoDetail::get();
        return $search;
    }
}
