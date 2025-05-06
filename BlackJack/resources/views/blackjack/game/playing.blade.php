<x-app-layout>
    <div class="container flex justify-center mb-9 flex-col gap-8">
        <div class="container flex justify-center">
            <div class="container flex relative w-fit" id="dealerCardsImageContainer">
            </div>
        </div>
        <div class="container flex justify-center">
            <p class="text-white text-2xl" id="dealerCardsValue"></p>
        </div>
    </div>
    <div class="container text-center flex flex-row justify-center gap-30">
        <p class="text-7xl text-white" id="gameResults2"></p>
        <p class="text-7xl text-white" id="gameResults"></p>

    </div>
    <div class="container flex justify-center my-9 flex-col gap-8">
        <div class="container flex justify-center gap-30">
            <p class="text-white text-2xl invisible" id="userCardsValue2"></p>
            <p class="text-white text-2xl" id="userCardsValue"></p>
        </div>
        <div class="container flex justify-center gap-30">
            <div class="container invisible relative w-fit" id="userCardsImageContainer2">
            </div>
            <div class="container flex relative w-fit" id="userCardsImageContainer">

            </div>
        </div>
    </div>
    <div class="container">
        <div class="container flex justify-center gap-30" id="userChipBetHeadContainer">
            <div class="container flex justify-center relative w-fit min-h-[110px]" id="userChipBetContainer">
                {{$betObject}}
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
                    <p class="text-xl" id="credits">{{ $profile->credits }}</p>
                </div>
            </div>
        </div>
    </div>
    @push('scripts')
@vite(['resources/js/blackjack/blackjack.js'])
@endpush
</x-app-layout>