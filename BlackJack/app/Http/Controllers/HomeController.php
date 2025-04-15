<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    public function index() {
        $ViewPage = Auth::check() ? 'blackjack.home-page' : 'blackjack.home-page-guest';    
        return view($ViewPage);
    }
}
