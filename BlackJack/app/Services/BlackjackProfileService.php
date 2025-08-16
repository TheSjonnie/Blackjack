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
            'userId' => $user->id,
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
        try {
            $data = $this->getProfile($userId);
            BlackjackProfile::find($userId)->update([
                'credits'     => $request->profileUpdates['credits'],
                'gamesPlayed' => $data->gamesPlayed + 1,
                'gamesWon'    => $data->gamesWon + $request->profileUpdates['gamesWon'],
                'gamesLost'   => $data->gamesLost + $request->profileUpdates['gamesLost'],
                'gamesDraw'   => $data->gamesDraw + $request->profileUpdates['gamesDraw'],
            ]);
            return 'succes';
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
