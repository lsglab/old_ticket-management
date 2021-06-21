<script>
import Accordion from "../components/basic/Accordion.svelte";
import Ticket from "../components/Ticket.svelte";

export let tickets;

let accordionrecent;

</script>

<style>

</style>

<div class="text-center">
    <h1 class="inline-block text-xl">Archiv</h1>
</div>
<div class="flex flex-col space-y-2">
    <Accordion bind:this={accordionrecent}>
        <button slot="header" on:click={() => {accordionrecent.toggle()}} class="mx-2 focus:outline-none">
            <span>Kürzlich</span>
        </button>
        <div slot="body">
            {#each tickets as ticket}
                <div class="m-2">
                    <Ticket ticket={ticket} bind:editable={ticket.editable}></Ticket>
                </div>
            {/each}
        </div>
    </Accordion>
</div>
