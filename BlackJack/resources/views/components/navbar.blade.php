<nav class="container min-w-screen flex justify-center bg-Homepage-navbar border-b-3 border-yellow-500 ">
        <div class="container flex justify-between mx-5 text-white">
            <div class="flex flex-row items-center">
                <div class="container  w-20 h-auto">
                    <img src="{{asset('image/WebsiteIcon.png')}}" alt="WebsiteIcon">
                </div>
                <a href="" class="text-2xl text-yellow-500">Blackjack</a>
            </div>
            <div class="flex items-center">
                <a class="hidden sm:block md:m-4 m-2 text-yellow-500" href="/rules">rules</a>
                <a class="md:m-4 m-2 rounded-xl py-2 max-[400px]:py-1 px-5 max-[400px]:px-1 bg-yellow-500 text-xl" href="/Blackjackpage">play now</a>
                <a class="hidden sm:block md:m-4 m-2 text-yellow-500" href="#">LeaderBoard</a>
            </div>
            <div class="">
                @if(auth()->check() && auth()->user()->isAdmin())

                                  <div class="">
                    <a href="{{ route('admin')}}">Admin Dashboard</a>
                </div>  
                @endif
                            <div class="flex items-center gap-3.5">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="hidden sm:block text-yellow-500 cursor-pointer">Logout</button>
                </form>
            </div>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="sm:hidden" aria-controls="navbar-default" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    </nav>
    
    