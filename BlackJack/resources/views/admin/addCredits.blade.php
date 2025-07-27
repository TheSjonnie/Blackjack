<x-admin-layouts>
    <div class="min-w-max flex flex-col gap-7">
        <div class="border-1 rounded-lg bg-white min-h-fit">
            <div class="m-3 flex gap-2 flex-col">
                <x-user-list-with-search :users="$users" />
                
            </div>
        </div>
    </div>
</x-admin-layouts>
