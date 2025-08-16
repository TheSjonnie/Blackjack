<?php

namespace App\Livewire;

use Illuminate\Support\Facades\Log;
use Livewire\Component;

class TestSearch extends Component
{
    public $searchInput = '';


    public function render()
    {
        return view('livewire.test-search');
    }
}
