<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\AdminService;
use GuzzleHttp\Psr7\Response;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{
    private $adminService;
    public function __construct(AdminService $adminService) {
        $this->adminService = $adminService;
    }
    public function index() {
        $users = $this->adminService->getUsers();
        return view('admin.index')->with('users',$users);
        // return view('admin.index');
    }


    public function addCreditsIndex() : View {
        $users = $this->adminService->getUsers();
        // dd($users);
        return view('admin.addCredits')->with('users',$users);
    }
    public function addCredits($newCredits, $userId) : void {
        // dd($userId);
        $this->adminService->editCredits($newCredits, $userId);
    }
}
