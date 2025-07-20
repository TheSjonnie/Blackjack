<?php

namespace App\Http\Controllers;

use App\Services\AdminService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    private $adminService;
    public function __construct(AdminService $adminService) {
        $this->adminService = $adminService;
    }
    public function index() {
        $users = $this->adminService->getUsers();
        return view('admin.index')->with('users',$users);
    }


    public function addCreditsIndex() : View {
        $users = $this->adminService->getUsers();
        return view('admin.addCredits')->with('users',$users);
    }
}
