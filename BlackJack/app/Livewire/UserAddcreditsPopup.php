<?php

namespace App\Livewire;

use App\Models\User;
use Livewire\Component;
use PhpOption\None;
use App\Http\Controllers\AdminController;
class UserAddcreditsPopup extends Component
{
    public $user;
    public $show = false;
    public $credits = 0;

    protected $listeners = ['showPopupFn' => 'getUser'];

    public function getUser($userId) {
        $this->user = User::with('UserProfile')->findOrFail($userId);
        $this->show = true;
        // dd($this->user);
        $this->credits = $this->user->UserProfile->credits;
    }
    public function addCredits(AdminController $adminController) {
        // dd( $this->user);
$validated = $this->validate([
    'credits' => 'required|numeric|max:9007199254740991'
], messages: [
    'credits.max' => 'The maximal number is 9007199254740991. Please enter a lower number',
]);

        $adminController->addCredits($validated, $this->user->id);
    }
    public function render()
    {
        return view('livewire.user-addcredits-popup');
    }
}
