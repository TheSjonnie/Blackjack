<div x-data='search("{{ route('api.users.search') }}", @json($users),"user_name")'
    x-init="fetch(); $watch('input', value => fetch())">
    <x-searchbar />
    <x-user-list />
    <div class="flex justify-center mt-4 mb-1.5">
        <template x-if='pagination === ""'>
            {{ ($users->links()) }}
        </template>
        <template x-if=' pagination != "" '>>
            <div x-html="pagination"></div>
        </template>

    </div>
</div>
