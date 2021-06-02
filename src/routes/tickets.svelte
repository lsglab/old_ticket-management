<script>
    import Ticket from "../components/Ticket.svelte";
	import Alert from "../components/Alert.svelte";

	import {messages} from "../components/basic/Messages.svelte"

    export let tickets;

</script>

<style>

</style>
   
<div class="m-2">
	<label class="flex items-center mb-2 border border-gray-300 rounded-md shadow-sm">
		<button class="inline-flex px-2 bg-gray-200 rounded-l-md focus:outline-none">&#128269</button>
		<input type="text" class="flex-1 px-1 appearance-none bg-gray-100 rounded-r-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Suche">
	</label>
	<button class="w-full text-sm border border-blue-400 rounded-md shadow-sm focus:outline-none">
		<p>+ Neues Ticket</p>
	</button>
</div>

{#each tickets as ticket}
	<div class="m-2">
		<Ticket ticket={ticket} bind:editable={ticket.editable}></Ticket>
	</div>
{/each}

{#if tickets.some((ticket) => {return ticket.editable})}
	<Alert content="{messages.editor_active}"></Alert>
{/if}	
