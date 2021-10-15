<script>
    import Ticket from "../components/Ticket.svelte";
	import Alert from "../components/Alert.svelte";
	import SwipeList from "../components/molecules/SwipeList.svelte"
	import { localDb } from "../LocalDb.svelte";

	let tickets = [];
	
	localDb.on("ready", async function() {
		try {
			tickets = await localDb.tickets.where("archived").equals(0).toArray();

		} catch (error) {
			console.error((err.stack || err));
		}
	})

</script>

<style>

</style>

<SwipeList swipes = {tickets}>

</SwipeList>
<!--
{#each tickets as ticket}
	<Ticket class="m-2" ticket={ticket}></Ticket>
{/each}
-->
