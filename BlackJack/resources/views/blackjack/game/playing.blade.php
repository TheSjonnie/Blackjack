<x-app-layout>
    <div class="container mt-7">
        <div class="container flex justify-center mb-9 flex-col gap-8">
            <div class="container flex justify-center">
                <div class="container flex relative w-fit h-[160px]" id="dealerCardsImageContainer">
                </div>
            </div>
            <div class="container flex justify-center h-[32px]">
                <p class="text-white text-2xl" id="dealerCardsValue"></p>
            </div>
        </div>
        <div class="container text-center flex flex-row justify-center gap-30 h-[72px]">
            <p class="text-7xl text-white" id="gameResults2"></p>
            <p class="text-7xl text-white" id="gameResults"></p>
    
        </div>
        <div class="container flex justify-center my-9 flex-col gap-8">
            <div class="container flex justify-center gap-30 h-[32px]">
                <p class="text-white text-2xl hidden" id="userCardsValue2"></p>
                <p class="text-white text-2xl" id="userCardsValue"></p>
            </div>
            <div class="container flex justify-center gap-30">
                <div class="container hidden relative w-fit" id="userCardsImageContainer2">
                </div>
                <div class="container flex relative w-fit h-[160px]" id="userCardsImageContainer">
    
                </div>
            </div>
        </div>
        <div class="container flex gap-6 justify-center">
            <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="actionBtnSplit">Split</button>
            <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden"
                id="actionBtnDubble">Dubble</button>
            <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white invisible" id="actionBtnHit">Hit</button>
            <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white invisible" id="actionBtnStand">Stand</button>
        </div>
        <div class="container flex flex-row relative">
            <div class="flex justify-center mb-3">
                <div class="container w-2/3 flex flex-col gap-5">
                    <div class="w-fit flex flex-row gap-3 bg-gray-200 p-3 rounded-xl">
                        <p class="text-xl">Bet: </p>
                        <p class="text-xl" id="bet">0</p>
                    </div>
                    <div class="w-fit flex flex-row gap-3 bg-gray-200 p-3 rounded-xl">
                        <p class="text-xl">Credits: </p>
                        <p class="text-xl" id="credits">{{ $profile->credits }}</p>
                    </div>
                </div>
            </div>
            <div id="userChipBetHeadContainer" class="absolute left-1/2 -translate-x-1/2 flex justify-center gap-8">
                <div class="container flex justify-center relative w-fit min-h-[110px]  items-end" id="userChipBetContainer">
                    @foreach ($betObject as $chip)
                        <img src="{{$chip['src']}}" alt="value {{$chip['value']}} chip" class="{{$chip['position']}} {{$chip['left']}} {{$chip['rotate']}} {{$chip['top']}} ChipImgSize"> 
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    @push('scripts')
        <script>
            window.totalBetValue = @json($totalBetValue);
            window.credits = @json($profile->credits);
        </script>
        @vite(['resources/js/blackjack/playing/startGame.js'])
    @endpush
</x-app-layout>