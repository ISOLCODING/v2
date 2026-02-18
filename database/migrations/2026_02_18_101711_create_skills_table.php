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
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category')->default('technical'); // technical, tools, soft
            $table->integer('proficiency')->default(50);
            $table->string('icon_class')->nullable(); // For fontawesome or similar
            $table->string('color')->nullable(); // For tailwind color
            $table->integer('sort_order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skills');
    }
};
