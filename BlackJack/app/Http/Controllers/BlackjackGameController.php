<?php

namespace App\Http\Controllers;

use App\Services\BlackjackProfileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\VarDumper\VarDumper;

class BlackjackGameController extends Controller
{
    protected $profileService;
    public function __construct(BlackjackProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function index(Request $request) {
        // dd($requst, 'hoi');
        $profile = $this->profileService->getProfile(Auth::id());
        return view('blackjack.game.betting')->with('profile', $profile);
    }
    public function getProfile() {
        return $this->profileService->getProfile(Auth::id());
    }
    public function updateCredits(Request $request) {
        return $this->profileService->updateCredits($request[0],Auth::id());
    }
    public function updateProfile(Request $request) {
        return $this->profileService->updateProfile($request,Auth::id());
    }
}
