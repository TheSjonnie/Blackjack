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
                        <p class="text-xl" id="bet">{{$totalBetValue}}</p>
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
                        <img src="{{$chip['src']}}" alt="value {{$chip['value']}} chip" class="{{$chip['position']}} left-{{$chip['left']}} rotate-{{$chip['rotate']}} top-{{$chip['top']}} ChipImgSize"> 
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    <template class="top-1 top-2 top-3 top-4  
            left-1 left-2 left-3 left-4  
            rotate-1.1 rotate-1.2 rotate-1.3 rotate-1.4 rotate-1.5 
            rotate-1.6 rotate-1.7 rotate-1.8 rotate-1.9 rotate-2.0 
            rotate-2.1 rotate-2.2 rotate-2.3 rotate-2.4 rotate-3.0 
            rotate-3.1 rotate-3.2 rotate-3.3 rotate-4.0 rotate-4.1 
            rotate-4.2 rotate-4.3 rotate-5.0 rotate-5.1 rotate-5.2 
            rotate-5.3 rotate-6.0 rotate-6.1 rotate-6.2 rotate-7.0 
            rotate-7.1 rotate-7.2 rotate-8.0">
</template>

    @push('scripts')
        <script>
            window.totalBetValue = @json($totalBetValue);
            console.log("🚀 ~ window.totalBetValue:", window.totalBetValue)
            window.credits = @json($profile->credits);
        </script>
        @vite(['resources/js/blackjack/playing/startGame.js'])
    @endpush
</x-app-layout>