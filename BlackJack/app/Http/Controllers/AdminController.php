<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\AdminService;
use GuzzleHttp\Psr7\Response;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
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
    public function SearchUsernames(Request $request) : JsonResponse {
        $input = $request->query('input');
        $users = $this->adminService->getUsersByUsername($input);
        return response()->json($users);
    }
}
