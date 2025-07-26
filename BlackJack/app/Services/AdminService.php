<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
class AdminService
{
    public function getUsers() {
        return User::paginate(10);
    }
    public function getUsersByUsername($input) {
        $users = User::where('user_name', 'like', '%' . $input . '%')
            ->select('id','user_name')
            ->get()->pagination(10);
        return $users;
    }
}
