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
                'gamesPlayed' => $data->GamesPlayed + 1,
                'gamesWon'    => $data->GamesWon + ($request->profileUpdates['gamesWon'] ? 1 : 0),
                'gamesLost'   => $data->GamesLost + ($request->profileUpdates['gamesLost'] ? 1 : 0),
            ]);
            return 'succes';
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
