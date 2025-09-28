<?php

namespace App\Livewire;

use App\Models\User;
use Livewire\Component;
use PhpOption\None;

class UserAddcreditsPopup extends Component
{
    public $user;
    public $show = false;
    protected $listeners = ['showPopupFn' => 'getUser'];

    public function getUser($userId) {
        $this->user = User::findOrFail($userId);
        $this->show = true;
    }
    public function render()
    {
        return view('livewire.user-addcredits-popup');
    }
}
