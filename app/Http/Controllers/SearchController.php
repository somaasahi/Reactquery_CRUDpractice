<?php

namespace App\Http\Controllers;

use App\Models\TodoDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $keyword = $request->get('keyword');
        $true = $request->get('num1');
        $false = $request->get('num2');

        $query = TodoDetail::query();

        if(!empty($keyword)) {
            log::debug('key');
            $query->orWhere('name', 'LIKE', "%{$keyword}%");
        }
        // log::debug($true);
        if(!$true) {
            // log::debug('20');
            $query->orWhere('completed_flg', true);
        }

        if(!$false) {
            $query->orWhere('completed_flg', false);
        }

        $search = $query->get();

        return $search;
    }
}
