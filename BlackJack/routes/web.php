<?php

use App\Http\Controllers\BlackjackGameController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return redirect('/home');
});

Route::get('/home',[HomeController::class,'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware('auth')->group(function () {
    Route::get('/Blackjackpage', [BlackjackGameController::class,'index']);
    Route::get('/getProfile', [BlackjackGameController::class, 'getProfile']);
    Route::post('/updateCredits',[BlackjackGameController::class, 'updateCredits']);
    Route::post('/updateProfile',[BlackjackGameController::class, 'updateProfile']);
    Route::get('/startGame',[BlackjackGameController::class,'startGame']);
    Route::post('/startGameData',[BlackjackGameController::class,'startGameData']);
    Route::get('/rules', function() {
        return view('blackjack.rules-page');
    });
});

require __DIR__.'/auth.php';
