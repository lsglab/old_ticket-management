<script>
    import Accordion from "./basic/Accordion.svelte";
    import HorizontalRule from "./basic/HorizontalRule.svelte";

    export let ticket = {}

    export let editable = false;

    export let stared = false;

    export let starable = false;

    let accordion;

    let goalInput;

    function addGoal() {
        if(goalInput.value == "") { 
        } else {
            ticket.goals.push({description : goalInput.value});
            goalInput.value = "";
        }
    };

    function formatDate(date) {
        date = new Date()
        return date.getDate() + "." + date.getMonth()+ "." + date.getFullYear();
    }

</script>

<style>

</style>

<div class="rounded border border-blue-200 shadow">
    <Accordion bind:this={accordion}>
        <div slot="header" class="flex bg-gray-100">
            {#if starable}
                <button on:click={() => stared = !stared} class="px-1 focus:outline-none">
                    {#if stared}
                        &#9733;
                    {:else}
                        &#9734;      
                    {/if}
                </button>
            {/if}
            {#if editable}
                <div class="flex flex-grow">
                    <input bind:value={ticket.task} type="text" placeholder="{ticket.task}" size="17" class="flex-none p-0.5 appearance-none border border-gray-300 shadow-sm bg-gray-100 rounded-l-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none">
                    <input bind:value={ticket.room} type="text" placeholder="{ticket.room}" size="2" class="flex-none p-0.5 appearance-none border border-gray-300 shadow-sm bg-gray-100 focus:ring-blue-200 focus:border-blue-400 focus:outline-none">
                    <input bind:value={ticket.duedate} type="text" placeholder="{ticket.duedate}" size="6" class="flex-none p-0.5 appearance-none border border-gray-300 shadow-sm bg-gray-100 rounded-r-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none">
                </div>
            {:else}
                <button on:click={accordion.toggle()} class="flex flex-grow focus:outline-none">
                    <span class="flex-none p-1">{ticket.task}</span>
                    <div class="flex-grow"><!--Empty spacer--></div>
                    <span class="flex-none p-1">{ticket.room}</span> 
                    <span class="flex-none p-1">{formatDate(ticket.duedate)}</span>
                </button>
            {/if}   
        </div>
        <div slot="body" on:dblclick={() => editable = !editable} class="bg-gray-50">
            <div class="p-1">
                {#if !editable}
                    <span>{ticket.tasklong}</span>
                {:else}
                    <div class="mt-1">
                        <textarea value={ticket.tasklong} rows="2" class="w-full border-gray-300 shadow-sm rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Beschreibung hinzufügen"></textarea>
                    </div>
                {/if}
                <HorizontalRule></HorizontalRule>
                {#each ticket.goals as goal}
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="form-tick appearance-none border border-blue-400 rounded-md">
                        {#if editable}
                            <input bind:value={goal.description} type="text" placeholder="{goal.description}" class="px-1 mb-1 w-full appearance-none border border-gray-300 shadow-sm bg-gray-100 rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none">
                            <button class="inline-flex px-1 bg-red-200 rounded-full focus:outline-none">&#215</button>
                        {:else}
                            <span>{goal.description}</span>
                        {/if}
                    </label>
                {/each}
                {#if editable}
                    <label class="flex items-center border border-gray-300 rounded-md shadow-sm">
                         <input bind:this={goalInput} type="text" class="flex-1 px-1 appearance-none bg-gray-100 rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Neuen Punkt hinzufügen">
                         <button on:click={addGoal} class="inline-flex px-2 bg-gray-200 rounded-r-md focus:outline-none">&#10004</button>
                    </label>
                {/if}     
                <HorizontalRule></HorizontalRule>
                <div class="flex items-center">
                    <span class="flex-1">&#9817 Ticket erstellt von: </span>
                    <span class="inline-flex m-1 px-2 bg-blue-100 rounded-md">{ticket.author}</span>
                </div>
                <HorizontalRule></HorizontalRule>
            </div>
        </div>
        <div slot="footer" class="bg-gray-100">
            <div class="p-1">
                {#if editable}
                    <button class="p-1 w-full border border-blue-400 rounded-md shadow-sm focus:outline-none">
                        <p on:click={() => editable = false}>Fertig</p>
                    </button>
                {/if}
            </div>
        </div>
    </Accordion>
</div>
