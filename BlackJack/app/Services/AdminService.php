<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
class AdminService
{
    public function getUsers() {
        return User::All();
    }
}
