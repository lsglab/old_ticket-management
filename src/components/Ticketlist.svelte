<script>
    import Ticket from "../components/Ticket.svelte";

    export 	let tickets = [];

</script>

<!--
	@component
	Container for a set of tickets.
-->


{#each tickets as ticket}
	<div class="m-2">
		<Ticket {ticket} starable=true></Ticket>
	</div>
{/each}