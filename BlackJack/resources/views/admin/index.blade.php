<x-admin-layouts>
    <div class="flex flex-row gap-10">
        <div class="w-1/4 flex flex-col justify-between min-h-100">
            <div class="border-1 rounded-lg bg-white h-1/5">
                <form action="{{ Route('admin.addCredits')}}" method="get" class="h-full w-full">
                    <button type="submit" class="h-full w-full cursor-pointer">
                        <h1>add credits</h1>
                    </button>
                </form>
            </div>
            <div class="border-1 rounded-lg bg-white h-1/5">
                <h1>reports</h1>
            </div>
            <div class="border-1 rounded-lg bg-white h-1/5">
                ban player
            </div>
            <div class="border-1 rounded-lg bg-white h-1/5">
                roles
            </div>
        </div>
        <div class="w-3/4 flex flex-col gap-7">
            <div class="flex flex-row justify-between h-2">
                <div class="border-1 rounded-lg bg-white min-h-max min-w-3/10">
                    <h1>stats</h1>
                </div>
                <div class="border-1 rounded-lg bg-white min-h-max min-w-3/10">
                    <h1>total players</h1>
                </div>
                <div class="border-1 rounded-lg bg-white min-h-max min-w-3/10">
                    <h1>comming</h1>
                </div>
            </div>
            <div class="border-1 rounded-lg bg-white min-h-fit">
                <div class="m-3 flex gap-2 flex-col">
                    <h1 class="text-2xl text-yellow-600 ">All Users</h1>
                    @foreach ($users as $user)
                        <div class="">
                            <x-user-card userName='{{$user->user_name}}'>
                            </x-user-card>
                        </div>
                        @endforeach
                    </div>
            </div>
        </div>
    </div>
</x-admin-layouts>