<?php

namespace App\Services;

use App\Models\BlackjackProfile;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class AdminService
{
    public function getUsers() {
            return User::select('id', 'user_name')->paginate(10);
    }
    public function getUsersByUsername($input,$Path) {
        $users = User::where('user_name', 'like', '%' . $input . '%')
            ->select('id','user_name')
            ->paginate(10);
        $users->withPath(route($Path));
        return ($users);
    }
    public function editCredits($credits, $userId) {
        // dd($credits);
        BlackjackProfile::find($userId)
            ->update(['credits' => $credits['credits']]);
        // dd(BlackjackProfile::find($userId));
        redirect(Route('admin.addCredits'));
    }
}
