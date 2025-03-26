<?php

use App\Http\Controllers\BlackjackGameController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
Route::get('/', function () {
    return redirect('/home');
});

Route::get('/home', function () {
    $ViewPage = Auth::check() ? 'blackjack.home-page' : 'blackjack.home-page-guest';
    
    return view($ViewPage);
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware('auth')->group(function () {
    Route::get('/Blackjackpage', [BlackjackGameController::class,'index']);
});

require __DIR__.'/auth.php';
