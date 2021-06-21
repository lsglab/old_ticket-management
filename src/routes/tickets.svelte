<script>
    import Ticket from "../components/Ticket.svelte";
	import Alert from "../components/Alert.svelte";
	import Dropdown from "../components/basic/Dropdown.svelte";
	import {messages} from "../components/basic/Messages.svelte"

    export let tickets;

	let dropdowns = {
		sorting : {
			criteria : ["Erstellung", "Fälligkeit","Raum","Name","Autor"],
			active : false,
		},
	};

	function sort(criterium) {
		return criterium;
	}

</script>

<svelte:window on:click={(event) => {
	/*
	for(let dropdown in dropdowns) {
		dropdowns[dropdown].active = false;
	}
	*/
}}/>


<style>

</style>
   
<div class="flex flex-col space-y-2 m-2">
	<div class="text-center">
		<h1 class="inline-block text-xl">Tickets</h1>
	</div>
	<label class="flex items-centerborder border border-gray-300 rounded-md shadow-sm">
		<button class="inline-flex px-2 bg-gray-200 rounded-l-md focus:outline-none">&#128269</button>
		<input type="text" class="flex-1 px-1 appearance-none bg-gray-100 rounded-r-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Suche">
	</label>
	<button class="w-full text-gray-700 focus:outline-none">
		<span>+ Neues Ticket</span>
	</button>
	<div class="relative inline-block">
		<button on:click={() => dropdowns.sorting.active = true} class="inline-flex justify-center text-gray-700 focus:outline-none" id="sort-dropdown-button" aria-expanded="true" aria-haspopup="true">
			<span>Sortieren</span>
		</button>
		{#if dropdowns.sorting.active}
			<Dropdown labelledby={"sort-dropdown-button"}>
				{#each dropdowns.sorting.criteria as criterium}
					<button on:click={() => {sort(criterium)}} class="block px-2 py-1 text-gray-700 focus:outline-none">{criterium}</button>
				{/each}
			</Dropdown>
		{/if}
	</div>
</div>

{#each tickets as ticket}
	<div class="m-2">
		<Ticket ticket={ticket} bind:editable={ticket.editable}></Ticket>
	</div>
{/each}

{#if tickets.some((ticket) => {return ticket.editable})}
	<Alert content="{messages.editor_active}"></Alert>
{/if}	
