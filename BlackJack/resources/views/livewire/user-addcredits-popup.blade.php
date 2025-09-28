<div class="">
    @if ($show)
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50">
        <div class="bg-yellow-500 rounded-lg shadow-lg w-96 p-6">
            <h2 class="text-lg font-semibold mb-4">Add Credits to {{$user}}</h2>
            
            <label class="block mb-2">Amount</label>
            <input type="number" wire:model="creditsToAdd"
            class="w-full border rounded p-2 mb-4 bg-white" placeholder="Enter amount">
            
            <div class="flex justify-end space-x-2">
                <button wire:click="$set('showModal', false)"
                class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
            </button>
            <button wire:click="addCredits"
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Save
        </button>
    </div>
</div>
</div>
@endif
</div>