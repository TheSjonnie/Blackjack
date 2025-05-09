<?php

namespace App\Http\Controllers;

use App\Services\BlackjackProfileService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;
use Illuminate\Validation\ValidationException;
class BlackjackGameController extends Controller
{
    protected $profileService;
    public function __construct(BlackjackProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function index(Request $request) {
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
    public function startGame(): View|RedirectResponse{
        try {
            $profile = $this->profileService->getProfile(Auth::id());
            $betObject = session('betObject');
            $totalBetValue = session('totalBetValue');
        } catch (\Throwable $th) {
            Log::error('Failed to start game: ' . $th->getMessage());
            return redirect()->route('home')->with('error', 'There was a problem starting your game. Please try again.');    
        }
        return view('blackjack.game.playing')->with([
            'profile' => $profile,
            'betObject' => $betObject,
            'totalBetValue' => $totalBetValue,
        ]);
    }
    public function startGameData(Request $request): JsonResponse {
        try {
            $validated = $request->validate([
                'betObject' => 'required',
                'totalBetValue' => 'required'
            ],[
                'betObject.required' => 'The betObject is not found',
                'totalBetValue.required' => 'The totalBetValue is not found'
            ]);

            session(['betObject' => $validated['betObject']]);
            session(['totalBetValue' => $validated['totalBetValue']]);
            
            return response()->json(['succes' => true]);
        }   catch (ValidationException $e) {
            return response()->json([
                'succes' => false,
                'message' => 'Error: ' . $e->getMessage(),
            ]);
        } catch (\Throwable $e) {
            return response()->json(['succes' => false, 'message' => $e->getMessage()]);
        }
        
    }
}
