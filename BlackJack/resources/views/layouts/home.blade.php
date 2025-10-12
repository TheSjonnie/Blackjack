<x-app-layout>
    <header>
        <x-navbar />
    </header>
    <main class="relative">
        {{ $slot }}
    </main>
    <footer>
        <x-footer />
    </footer>
</x-app-layout> 