<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TodoDetail;

class Todo extends Model
{
    use HasFactory;

    protected $table = "to_dos";

    protected $fillable = [
        'tiele',
    ];

    public function todoDetails()
    {
        return $this->hasMany('\App\Models\TodoDetail', 'to_do_id', 'id');
    }

    // public function delete()
    // {
    //     $this->todoDetails()->delete();
    //     // return parent::delete();
    // }
}
