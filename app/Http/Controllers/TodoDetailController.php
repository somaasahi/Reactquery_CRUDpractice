<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoDetail\StoreRequest;
use App\Http\Requests\TodoDetail\UpdateRequest;
use App\Models\TodoDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TodoDetailController extends Controller
{
    public function search()
    {
        Log::debug('oko.k');
        $search = TodoDetail::get();
        return $search;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::debug('oko.k');
        $search = TodoDetail::get();
        return $search;
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $todoDetail = new TodoDetail();
        $todoDetail->to_do_id = $request->get('to_do_id');
        $todoDetail->name = $request->get('name');
        $todoDetail->completed_flg = $request->get('completed_flg');
        $todoDetail->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $todoDetail = TodoDetail::find($id);
        $todoDetail->name = $request->get('name');
        $todoDetail->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TodoDetail::where('id', $id)->delete();
    }
}
