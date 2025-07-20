<x-admin-layouts>
        <div class="min-w-max flex flex-col gap-7">
            <div class="border-1 rounded-lg bg-white min-h-fit">
                <div class="m-3 flex gap-2 flex-col">
                    <div class="">
                        <form action="{{url()->current()}}" method="get">
                            <input type="text" name="search" id="search" value="{{request('search')}}" placeholder="Search users" class="border-1 rounded-md py-2 ">
                        </form>
                    </div>
                    @foreach ($users as $user)
                        <div class="">
                            <x-user-card userName='{{$user->user_name}}'>
                            </x-user-card>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
</x-admin-layouts>