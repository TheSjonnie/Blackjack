<div>
    <div class="">
        <input type="text" wire:model.live="searchInput" placeholder="Search..."
            class="border rounded-md py-2 px-3 w-full mb-4">

        <div class="flex flex-col gap-2.5">
            @foreach ($users as $user)
                <div class="border-1 rounded-md p-2 flex justify-between">
                    <div class="">
                        <h1>Username: {{ $user->user_name }}</h1>
                    </div>
                    <div class="flex gap-4">
                        <h1>Credits: {{$user->credits }}</h1>
                        @if ($addCreditPage)
                        <button wire:click="$dispatch('showPopupFn', [{{ $user->id }}])" class="border-1 rounded-lg px-2">Edit credits</button>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <div class="">
        @if ($addCreditPage)
        <livewire:user-addcredits-popup />
        @endif
    </div>
    <div class="flex justify-center mt-4 mb-1.5">
        {{ $users->links() }}
    </div>

</div>
