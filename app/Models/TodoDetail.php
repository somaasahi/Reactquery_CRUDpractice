<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Todo;

class TodoDetail extends Model
{
    use HasFactory;

    protected $table = "to_do_details";

    protected $fillable = [
        'to_do_id',
        'name',
        'completed_flg'
    ];

    public function Todo()
    {
        // return $this->belongsTo(Todo::class);
        return $this->belongsTo('\App\Models\Todo', 'id', 'to_do_id');
    }
}
