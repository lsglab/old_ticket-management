<script>
    import Accordion from "../components/basic/Accordion.svelte";
    import Ticket from "../components/Ticket.svelte";
    import { localDb } from "../LocalDb.svelte";

    let tickets = [];

    let times = [
        {
            description: "Heute",
        },
        {
            description: "Gestern",
        },
        {
            description: "Vergangene Woche",
        },
        {
            description: "Vergangener Monat",
        },
        {
            description: "Älter",
        },

    ];

    localDb.on("ready", async function() {
        try {
            tickets = await localDb.tickets.where("archived").equals(1).toArray();
        } catch (error) {
            console.error((err.stack || err));
        }
	})

</script>

<style>

</style>

<div class="m-2 text-center">
    <h1 class="inline-block text-xl">Archiv</h1>
</div>
<div class="flex flex-col space-y-2">
    {#each times as time}
        <Accordion bind:this={time.accordion}>
            <button slot="header" on:click={() => {time.accordion.toggle()}} class="mx-2 text-gray-700 focus:outline-none">
                <span>{time.description}</span>
            </button>
            <div slot="body" class="flex-col">
                {#each tickets as ticket}
                        <div class="m-2">
                            <Ticket ticket={ticket}></Ticket>
                        </div>
                {/each}
            </div>
            <div slot="footer">
        </Accordion>
    {/each}
</div>
