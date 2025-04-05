<x-app-layout>
    <div class="container flex justify-center">
        <div class="container w-3/4">
            <div class="container flex justify-center mb-9 flex-col gap-8">
                <div class="container flex justify-center">
                    <div class="container flex relative w-fit" id="DealerCardsImageContainer">
                        <!-- <img src="{{asset('image/DeckCards/clubs_5.png')}}" alt="club 5 img" srcset="" class="CardsImgSize rotate-345">
                        <img src="{{asset('image/DeckCards/clubs_A.png')}}" alt="club 5 img" srcset="" class="CardsImgSize absolute left-3 rotate-355">
                        <img src="{{asset('image/DeckCards/clubs_A.png')}}" alt="club 5 img" srcset="" class="CardsImgSize absolute left-6 rotate-5">
                        <img src="{{asset('image/DeckCards/clubs_A.png')}}" alt="club 5 img" srcset="" class="CardsImgSize absolute left-9 rotate-15">
                        <img src="{{asset('image/DeckCards/clubs_A.png')}}" alt="club 5 img" srcset="" class="CardsImgSize absolute left-12 rotate-25">
                        <img src="{{asset('image/DeckCards/clubs_A.png')}}" alt="club 5 img" srcset="" class="CardsImgSize absolute left-15 rotate-35"> -->
                    </div>
                </div>
                <div class="container flex justify-center">
                    <p class="text-white text-2xl" id="DealerCardsValue"></p>
                </div>
            </div>
            <div class="container flex justify-center my-6" id="StartBtnContainer">
                <button id="StartGame" class="bg-yellow-500 rounded-xl px-7 py-2 cursor-pointer text-white">Start Game</button>
            </div>
            <div class="container text-center">
                <p class="text-7xl text-white" id="GameResults"></p>
            </div>
            <div class="container flex justify-center my-9 flex-col gap-8">
                <div class="container flex justify-center">
                    <p class="text-white text-2xl" id="UserCardsValue"></p>
                </div>
                <div class="container flex justify-center">
                    <div class="container flex relative w-fit"  id="userCardsImageContainer">
                    </div>
                </div>
            </div>
            <div class="container flex gap-6 justify-center">
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="ActionBtnSplit">Split</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="ActionBtnDubble">Dubble</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="ActionBtnHit">Hit</button>
                <button class="bg-yellow-500 px-6 py-1 rounded-2xl text-white hidden" id="ActionBtnStand">Stand</button>
            </div>
            <div class="container flex justify-center flex-col">
                <div class="container flex justify-center">
                    <div class="container flex justify-center relative w-fit" id="userChipBetContainer">
                    </div>
                </div>
                <div class="flex justify-center mb-3">
                    <div class="container w-2/3 flex flex-row   ">
                        <div class="w-fit flex flex-row gap-3 bg-gray-200 p-3 rounded-xl">
                            <p class="text-xl">Bet: </p>
                            <p class="text-xl" id="Bet">0</p>
                        </div>
                    </div>
                </div>
                <div class="container flex justify-center" id="ChipsbetContainer">
                    <div class="container w-3/4 flex flex-row justify-center gap-4" id="ChipsBet">
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
</x-app-layout>