{{-- <div x-data='search("{{ route('api.users.search') }}", @json($users),"user_name")' x-init="fetch();
$watch('input', value => fetch())"> --}}

<div>
    <div class="">
<input type="text" wire:model="searchInput" placeholder="Search..."
            class="border rounded-md py-2 px-3 w-full mb-4">
            <p>Zoekterm: {{ $searchInput }}</p>

        <div class="flex flex-col gap-2.5">
            @foreach ($users as $user)
                <div class="border-1 rounded-md p-2">
                    <h1>Username: {{$user->user_name}}</h1>
                </div>            
            @endforeach
        </div>
    </div>
    <div class="flex justify-center mt-4 mb-1.5">
        {{ $users->links() }}
    </div>
</div>
