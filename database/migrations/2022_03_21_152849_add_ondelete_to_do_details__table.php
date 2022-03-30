<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOndeleteToDoDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('to_do_details', function (Blueprint $table) {
            $table->dropForeign('to_do_details_to_do_id_foreign');
            $table->foreign('to_do_id')->references('id')->on('to_dos')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('do_details_', function (Blueprint $table) {
            //
        });
    }
}
