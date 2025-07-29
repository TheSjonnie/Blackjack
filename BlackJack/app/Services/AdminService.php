<?php

namespace App\Services;

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
}
