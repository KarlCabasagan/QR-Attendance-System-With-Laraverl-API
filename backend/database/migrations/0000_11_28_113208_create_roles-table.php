<?php

use Illuminate\Container\Attributes\DB;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB as FacadesDB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        if (Schema::hasTable('roles')) {
            $timestamp = now();
        
            FacadesDB::table('roles')->insert([
                ['name' => 'Student', 'created_at' => $timestamp, 'updated_at' => $timestamp],
                ['name' => 'Faculty', 'created_at' => $timestamp, 'updated_at' => $timestamp],
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
