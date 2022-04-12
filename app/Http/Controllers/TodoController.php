<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\StoreRequest;
use App\Http\Requests\Todo\UpdateRequest;
use App\Models\Todo;
use App\Models\TodoDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos = Todo::with('todoDetails')->get();
        return $todos;
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }


    // public function store(Request $request)
    // {
    //     Log::debug($request->get('tiele'));

    //     $todo = new Todo();
    //     $todo->tiele = $request->get('tiele');
    //     $todo->save();
    // }

    public function post(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tiele' => 'required|min:2|max:5',
        ]);


        if ($validator->fails()) {

            return response()->json(['message' => '投稿ルールを確認してください']);

        } else {
            DB::beginTransaction();

            try {

                $todo = new Todo();
                $todo->tiele = $request->get('tiele');
                $todo->save();
                // if($request->get('tiele')){
                //     throw new \Exception("エラーだよ");
                // }
                DB::commit();
                return response()->json(['message' => '正常に投稿されました']);
            } catch(Exception $exception) {
                DB::rollBack();
                $a = $exception->getMessage();
                return response()->json(['message' => 'システムエラー']);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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

        $todo = Todo::find($id);
        $todo->tiele = $request->get('tiele');
        $todo->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Todo::where('id', $id)->delete();
    }
}
