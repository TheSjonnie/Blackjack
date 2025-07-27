<div x-data='search("{{ route('api.users.search') }}", @json($users),"user_name")'
    x-init="fetch(); $watch('input', value => fetch())">
    <x-searchbar />
    <x-user-list />
    <div class="flex justify-center mt-4 mb-1.5">
        {{ $users->links() }}

    </div>
</div>
