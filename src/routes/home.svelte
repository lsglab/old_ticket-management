<script>
    export let user;

    let statistics = {
        new : 2,
        open : 2,
        soondue : 1
    };

</script>

<style>

</style>
   
<div class="space-y-1 m-2">
    <div class="text-center">
        <h1 class="inline-block text-xl">Willkommen</h1>
        <span class="inline-block m-1 px-2 bg-blue-100 rounded-md">{user.name}</span>
    </div>
    <div>
        <div class="flex">
            <p cass="inline-block">Es gibt</p>
            <span class="inline-block m-1 px-2 text-sm bg-blue-200 rounded-full">{statistics.new}</span>
            <p class="inline-block">
                {#if statistics.new == 1}
                    neues Ticket.
                {:else}
                    neue Tickets.
                {/if}
            </p>
        </div>
        <div class="flex">
            <p class="inline-block">
                {#if statistics.open == 1}
                    Es ist
                {:else}
                    Es sind
                {/if}
            </p>
            <span class="inline-block m-1 px-2 text-sm bg-blue-200 rounded-full">{statistics.open}</span>
            <p class="inline-block">
                {#if statistics.open == 1}
                    Ticket 
                {:else}
                    Tickets
                {/if}
                offen.
            </p>
        </div>
        <div class="flex">
            <span class="inline-block m-1 px-2 text-sm bg-blue-200 rounded-full">{statistics.soondue}</span>
            <p class="inline-block">
                {#if statistics.soondue == 1}
                    Ticket ist
                {:else}
                    Tickets sind
                {/if}
                bald fällig.
            </p>
        </div>
    </div>
</div>
