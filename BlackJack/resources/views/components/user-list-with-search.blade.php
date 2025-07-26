{{ $users->links() }}
<div x-data='search("{{ route('api.users.search') }}", @json($users),"user_name")'
    x-init="fetch(); $watch('input', value => fetch())">
    <x-searchbar />
    <x-user-list />
</div>
