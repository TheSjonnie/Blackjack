<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlackjackGameController extends Controller
{
    public function index() {
        return view('blackjack.blackjack-game');
    }
}
