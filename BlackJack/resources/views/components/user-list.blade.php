<div class="flex flex-col gap-2.5">
    <!-- <div class="" x-text="JSON.stringify(items)"></div> -->
    <template x-for="item in items">
        <div class="border-1 rounded-md p-2">
            <h1>Username: <span x-text="item.user_name" ></span></h1>
        </div>
    </template>
</div>
