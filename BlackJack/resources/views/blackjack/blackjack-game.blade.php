<x-app-layout>
    <div class="container flex justify-center flex-col gap-6">
        <div class="container flex justify-center">
            <div class="container flex justify-center relative w-fit" id="userChipBetContainer">
            </div>
        </div>
        <div class="container flex justify-center">
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
</x-app-layout>