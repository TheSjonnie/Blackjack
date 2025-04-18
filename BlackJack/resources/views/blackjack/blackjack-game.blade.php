<x-app-layout>
    <div class="container flex justify-center">
        <div class="container w-3/4">
            <div class="container flex justify-center mb-9 flex-col gap-8">
                <div class="container flex justify-center">
                    <div class="container flex relative w-fit" id="dealerCardsImageContainer">
                    </div>
                </div>
                <div class="container flex justify-center">
                    <p class="text-white text-2xl" id="dealerCardsValue"></p>
                </div>
            </div>
            <div class="container flex justify-center my-6" id="startBtnContainer">
                <button id="startGame" class="bg-yellow-500 rounded-xl px-7 py-2 cursor-pointer text-white">Start Game</button>
            </div>
            <div class="container text-center">
                <p class="text-7xl text-white" id="gameResults"></p>
            </div>
            <div class="container flex justify-center my-9 flex-col gap-8">
                <div class="container flex justify-center gap-30">
                    <p class="text-white text-2xl hidden" id="userCardsValue2"></p>
                    <p class="text-white text-2xl" id="userCardsValue"></p>
                </div>
                <div class="container flex justify-center gap-30">
                    <div class="container hidden relative w-fit" id="userCardsImageContainer2">
                    </div>
                    <div class="container flex relative w-fit" id="userCardsImageContainer">
                    </div>
                </div>
            </div>
            <div class="container flex gap-6 justify-center">
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="actionBtnSplit">Split</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="actionBtnDubble">Dubble</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="actionBtnHit">Hit</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="actionBtnStand">Stand</button>
            </div>
            <div class="container flex justify-center flex-col">
                <div class="container flex justify-center gap-30" id="userChipBetHeadContainer">
                    <div class="container flex justify-center relative w-fit" id="userChipBetContainer">
                    </div>
                </div>
                <div class="flex justify-center mb-3">
                    <div class="container w-2/3 flex flex-col gap-5">
                        <div class="w-fit flex flex-row gap-3 bg-gray-200 p-3 rounded-xl">
                            <p class="text-xl">Bet: </p>
                            <p class="text-xl" id="bet">0</p>
                        </div>
                        <div class="w-fit flex flex-row gap-3 bg-gray-200 p-3 rounded-xl">
                            <p class="text-xl">Credits: </p>
                            <p class="text-xl" id="credits">{{ $profile->Credits }}</p>
                        </div>
                    </div>
                </div>
                <div class="container flex justify-center" id="chipsBetContainer">
                    <div class="container w-3/4 flex flex-row justify-center gap-4" id="chipsBet">
                        <img src="{{asset('image/Chips/1.png')}}" alt="Value 1 chip" class="ChipImgSize" data-value="1">
                        <img src="{{asset('image/Chips/5.png')}}" alt="Value 5 Chip" class="ChipImgSize" data-value="5">
                        <img src="{{asset('image/Chips/10.png')}}" alt="Value 10 Chip" class="ChipImgSize" data-value="10">
                        <img src="{{asset('image/Chips/100.png')}}" alt="Value 100 Chip" class="ChipImgSize" data-value="100">
                        <img src="{{asset('image/Chips/500.png')}}" alt="Value 500 Chip" class="ChipImgSize" data-value="500">
                        <img src="{{asset('image/Chips/1000.png')}}" alt="Value 1000 Chip" class="ChipImgSize" data-value="1000">
                        <img src="{{asset('image/Chips/5000.png')}}" alt="Value 5000 Chip" class="ChipImgSize" data-value="5000">
                        <img src="{{asset('image/Chips/20000.png')}}" alt="Value 20000 Chip" class="ChipImgSize" data-value="20000">
                    </div>
                </div>
            </div>
        </div>
    </div>
    @push('scripts')
        @vite(['resources/js/blackjack/blackjack.js'])
    @endpush
</x-app-layout>

