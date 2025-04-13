<?php

namespace App\Http\Controllers;

use App\Services\BlackjackProfileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class BlackjackGameController extends Controller
{
    protected $profileService;
    public function __construct(BlackjackProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function index() {
        $profile = $this->profileService->getProfile(Auth::id());
        return view('blackjack.blackjack-game')->with('profile', $profile);
    }
    public function getProfile(BlackjackProfileService $blackjackProfileService) {
        return $blackjackProfileService->getProfile(Auth::id());
    }
    public function updateCredits(Request $request, BlackjackProfileService $blackjackProfileService) {
        return $blackjackProfileService->updateCredits($request[0],Auth::id());
    }
    public function updateProfile(Request $request, BlackjackProfileService $blackjackProfileService) {
        return $blackjackProfileService->updateProfile($request,Auth::id());
    }
}
