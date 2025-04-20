<?php

namespace App\Services;

use App\Models\User;
use App\Models\BlackjackProfile;
use Illuminate\Support\Facades\Auth;
class BlackjackProfileService
{
    public function createBlackjackProfile(User $user): BlackjackProfile
    {
        return BlackjackProfile::create([
            'UserId' => $user->id,
            'credits' => 10000,
            'GamesPlayed' => 0,
            'GamesWon'=> 0,
            'GamesLost' => 0,
        ]);
    }
    public function getProfile(int $userId) {
        return BlackjackProfile::where('userId', $userId)->first();
    }
    public function updateCredits(int $newCredit, int $userId) {
        return BlackjackProfile::find($userId)
            ->update(['credits' => $newCredit]);
    }
    public function updateProfile($request, int $userId) {
        $data = $this->getProfile($userId);
        BlackjackProfile::find($userId)->update([
            'credits'     => $request->profileUpdates['credits'],
            'GamesPlayed' => $data->GamesPlayed + 1,
            'GamesWon'    => $data->GamesWon + ($request->profileUpdates['GamesWon'] ? 1 : 0),
            'GamesLost'   => $data->GamesLost + ($request->profileUpdates['GamesLost'] ? 1 : 0),
        ]);
        
        return $request;
    }
}
