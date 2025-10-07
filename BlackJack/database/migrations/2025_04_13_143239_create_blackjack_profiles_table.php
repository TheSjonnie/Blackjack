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
        Schema::create('blackjack_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('credits')->default(1000);
            $table->unsignedBigInteger('gamesPlayed')->default(0);
            $table->unsignedBigInteger('gamesWon')->default(0);
            $table->unsignedBigInteger('gamesLost')->default(0);
            $table->unsignedBigInteger('gamesDraw')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blackjack_profiles');
    }
};
