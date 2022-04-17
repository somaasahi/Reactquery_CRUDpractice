<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class InfinityController extends Controller
{
    public function index(Request $request){



        $page = $request->get('page');


        if($page == 1){

            $tests = Test::orderBy('id', 'ASC')->take(15)->get();
            Log::debug('first');
            return $tests;


        }else{
            $page = $page - 1;
            $start = 15 * $page;
            $tests = Test::orderBy('id', 'ASC')->skip($start)->limit(15)->get();
            Log::debug($page);
            return $tests;
        }
    }
}
