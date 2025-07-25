<div class="">
    <input
        type="text"
        x-model="input"
        @input.debounce.300ms="fetch"
        placeholder="Search..."
        class="border rounded-md py-2 px-3 w-full mb-4"
    >
    @push('scripts')
        @vite(['resources/js/components/searchbar.js'])
    @endpush
</div>