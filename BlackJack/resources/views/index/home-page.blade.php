<x-app-layout>
    <div class="relative w-full min-h-screen flex flex-col justify-center ">
        <img src="{{ asset('image/Backgrounds/homePageBackground.jpg') }}" alt=""
            class="absolute w-full h-full object-cover z-0" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div class="relative z-10 flex flex-col justify-center items-center gap-20 h-[80vh]">
            <div class="px-6 py-2 border border-amber-500/50 bg-amber-500/10 backdrop-blur-sm rounded-full w-1/3">
                <h1 class="text-amber-500 text-center">PREMIUM GAMING EXPERIENCE</h1>
            </div>
            <div class="flex flex-col gap-10">
                <div class="text-center">
                    <h1 class="text-amber-500">BLACKJACK</h1>
                </div>
                <div
                    class="h-1 w-128 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 animate-pulse duration-900">
                </div>
            </div>
            <div class="w-1/4 text-center font-semibold">
                <h1 class="text-white">Ervaar de ultieme spanning van het klassieke kaartspel. Hit, stand, double down en split je weg naar
                    de perfecte 21.</h1>
            </div>
            <div class="flex flex-col gap-10 items-center">
                <div class="flex gap-10">
                    <a href="">
                        <div
                            class="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-6 shadow-lg shadow-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
                            <h1 class="text-black">Start Blackjack</h1>
                        </div>
                    </a>
                    <a href="">
                        <div
                            class="rounded-md bg-white hover:bg-amber-500/10 px-8 py-6 shadow-lg shadow-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border-1 border-amber-500 text-amber-500 hover:text-black">
                            <h1 class="">Spelregels</h1>
                        </div>
                    </a>
                </div>
                <div class="grid grid-flow-col md:grid-rows-1 grid-rows-3 gap-4">
                    <div class="border-1 border-amber-500/60 rounded-lg p-4 bg-black/20 flex flex-col items-center transition-all duration-300 hover:scale-110 active:scale-100">
                        <h1 class="text-amber-500">99,5%</h1>
                        <h1 class="text-white/80">Uitbetaling percentage</h1>
                    </div>
                    <div class="border-1 border-amber-500/60 rounded-lg p-4 bg-black/20 flex flex-col items-center transition-all duration-300 hover:scale-110 active:scale-100">
                        <h1 class="text-amber-500">99,5%</h1>
                        <h1 class="text-white/80">Uitbetaling percentage</h1>
                    </div>
                    <div class="border-1 border-amber-500/60 rounded-lg p-4 bg-black/20 flex flex-col items-center transition-all duration-300 hover:scale-110 active:scale-100">
                        <h1 class="text-amber-500">99,5%</h1>
                        <h1 class="text-white/80">Uitbetaling percentage</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
