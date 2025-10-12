<x-app-layout>
    <header>
        <x-navbar-guest />
        </header>
        <main>
            {{$slot}}
        </main>
        <footer>
            <x-footer-guest />
        </footer>
</x-app-layout>