<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->integer('price');
            $table->integer('old_price')->nullable()->default(null);
            $table->string("name");
            $table->text("description")->nullable()->default(null);
            $table->string("image_url")->nullable()->default(null);
            $table->string("slug")->unique();
            $table->text("text")->nullable()->default(null);
            $table->date("start_date");
            $table->date("end_date");
            $table->integer("position")->default(0);
            $table->boolean("last_minute_deal")->default(false);
            $table->unsignedBigInteger("category_id")->default(1);
            $table->unsignedBigInteger("city_id")->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
