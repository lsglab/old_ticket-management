<script>
import HorizontalRule from "./basic/HorizontalRule.svelte";

    export let ticket;

    export let editable = false;

    let open = false;

    let timer;

    function holdTimer() {
        if(!editable) {
            timer = setTimeout(function() {
                 editable = true
            }, 1000);
        }
    }

    function checkTimer() {
        if(timer != undefined) {
            clearTimeout(timer);
        }    
    }
</script>

<style>
    .body {
        height: 0;
        overflow: auto;
        transition: height 0.3s ease-in-out;
    }
    .open {
        height: 50%;
    }
</style>
   
<div class="rounded-sm text-sm border border-blue-200 shadow">
    <button on:click={() => open = !open} class="flex flex-wrap space-x-2 w-full bg-gray-100 focus:outline-none">
        <span class="p-1">{ticket.task}</span>
        <span class="flex-grow p-1">{ticket.room}</span> 
        <span class="p-1">{ticket.duedate}</span> 
    </button>
    <section on:mousedown={() => holdTimer()} on:mouseup={() => checkTimer()} class:open={open} class="body bg-gray-50">
        <div class="p-1">
            {#if !editable}
            <div>
                <span>{ticket.tasklong}</span>
            </div>
            {:else}
            <div class="mt-1">
                <textarea value={ticket.tasklong} rows="3" class="w-full border-gray-300 shadow-sm rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Beschreibung hinzufügen"></textarea>
            </div>
            {/if}
            <HorizontalRule></HorizontalRule>
            {#each ticket.goals as goal}
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="form-tick appearance-none border border-blue-400 rounded-md">
                    <span>{goal.description}</span>
                </label>
            {/each}
            {#if editable}
                <label class="flex items-center border border-gray-300 rounded-md shadow-sm">
                     <input type="text" class="flex-1 px-1 appearance-none bg-gray-100 rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Neuen Punkt hinzufügen">
                     <button class="inline-flex px-2 bg-gray-200 rounded-r-md focus:outline-none">&#10004</button>
                </label>
            {/if}     
            <HorizontalRule></HorizontalRule>
            <div class="flex items-center">
                <span class="flex-1">&#9817 Ticket erstellt von: </span>
                <span class="inline-flex m-1 px-2 bg-blue-100 rounded-md">{ticket.author}</span>
            </div>
            <HorizontalRule></HorizontalRule>
        </div>
    </section>
    <section class:body={!open} class="bg-gray-100">
        <div class="p-1">
            {#if editable}
                <button class="p-1 w-full border border-blue-400 rounded-md shadow-sm focus:outline-none">
                    <p on:click={() => editable = false}>Fertig</p>
                </button>
            {/if}
        </div>
    </section>
</div>
