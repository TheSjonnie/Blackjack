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
</x-app-layout>