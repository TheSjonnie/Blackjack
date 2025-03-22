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
        Schema::create('blackjack_plays', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('UserId');
            $table->unsignedBigInteger('StartCredit');
            $table->unsignedBigInteger('FinishCredit');
            $table->unsignedBigInteger('inzet');
            $table->array('DealerCards');
            $table->array('PlayerCards');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blackjack_plays');
    }
};
