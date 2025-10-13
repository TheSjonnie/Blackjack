
<x-app-layout>
    <header>
        <x-navbar />
    </header>
    <main class="flex justify-center align-middle p-3">
        <div class="border-1 rounded-xl bg-yellow-500 p-4 w-4/5">
            {{$slot}}
        </div>
    </main>
    <footer>
        <x-footer />
    </footer>
</x-app-layout> 