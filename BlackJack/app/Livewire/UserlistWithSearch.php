<?php

namespace App\Livewire;

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Livewire\WithPagination;

class UserlistWithSearch extends Component
{
    use WithPagination;

    public $searchInput = '';
    protected $queryString = ['searchInput'];

    public function updatingSearchInput()
    {
        $this->resetPage();
    }
    public function render()
    {
        $users = User::query()
            ->leftJoin('blackjack_profiles', 'users.id' , '=', 'blackjack_profiles.userId')
            ->select('users.*', 'blackjack_profiles.credits')
            ->when(
                $this->searchInput,
                fn($query) =>
                $query->
                where('user_name', 'like', "%{$this->searchInput}%")
            )
            ->paginate(10);
        return view('livewire.userlist-with-search', [
            'users' => $users,
        ]);
    }
}
