<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    public function index() {
        $ViewPage = Auth::check() ? 'index.home-page' : 'index.home-page-guest';    
        return view($ViewPage);
    }
}
