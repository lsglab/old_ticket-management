<script>	
	import Navbar from "./components/Navbar.svelte";
	import Ticket from "./components/Ticket.svelte";
	import VirtualList from '@sveltejs/svelte-virtual-list';

	export let ready = false;

	//Stores the interval of tickets in the VirtualList that are being rendered.
	let startTicket
	let endTicket
	/*
 	* Event listeners for the cordova API or mobile device events
 	*/
	document.addEventListener("deviceready", () => {
		ready = true;
	})

	// cordova device APIs loaded, calls are now possible
	function onDeviceReady() {
		console.log("Device is ready")
  		document.addEventListener("pause", onPause, false);
   	 	document.addEventListener("resume", onResume, false);
   		document.addEventListener("menubutton", onMenuKeyDown, false);
    // ...
	}

	function onPause() {

	}

	function onResume() {

	}

	function onMenuKeyDown() {

	}

	// error handeling
	window.addEventListener("cordovacallbackerror", function (event) {
    	alert("Cordova callback error: " + event.error);
	});

	/*!!-DEBUGGING-!!*/
	let demoticket = {
		task : "Austausch Whiteboard",
		tasklong : "Altes Whiteboard durch neues Modell ersetzen.",
		goals : [
			{
				description : "Anlieferung durch Legamaster",
				checked : true
			},
			{
				description : "Demontage altes Board",
				checked : true
			},
			{
				description : "Neues Board anbringen",
				checked : true
			},
			{
				description : "Altes Board ins Lab zur Wiederververtung",
				checked : false
			}
		],
		room : "4.101",
		duedate : "21.6.2022"
	}
	let demotickets = new Array({
		task : "Reperatur Beamer",
		tasklong : "EPSON Projektor, Überhitzt ständig, Abmontieren und Entstauben",
		room : "2.102",
		duedate : "2.1.2022"
	}, {

	}, {

	});

</script>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

</style>

<Navbar></Navbar>

<br>
<!--
<VirtualList {demotickets} bind:startTicket bind:endTicket let:ticket>
	<Ticket {...ticket}></Ticket>
</VirtualList>
-->
<div class="m-4">
	<Ticket ticket={demoticket}></Ticket>
</div>

