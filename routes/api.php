<?php

use App\Http\Controllers\TodoController;
use App\Http\Controllers\TodoDetailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('todos', TodoController::class);
Route::resource('todoDetails', TodoDetailController::class);

Route::post('todos/post', [TodoController::class, 'post']);
Route::get('searchDetails', 'App\Http\Controllers\Searchcontroller@search');
