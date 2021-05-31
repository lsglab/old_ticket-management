<script>	
	import Navbar from "./components/Navbar.svelte";
	import Ticket from "./components/Ticket.svelte";
	import Alert from "./components/Alert.svelte";
	
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
	let demotickets = [
	{	
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
				description : "Altes Board ins Lab zur Wiederverwertung",
				checked : false
			}
		],
		author : "BHG",
		room : "4.101",
		duedate : "21.6.2022"
	},	
	{
		task : "Reperatur Beamer",
		tasklong : "EPSON Projektor, Überhitzt ständig, Abmontieren und Entstauben",
		goals: [
			{
				description : "Kauf Druckluftreiniger",
				checked : true
			},
			{
				description : "Abmonieren und gründlich im Lab reinigen",
				checked : false
			},
			{
				description : "Wiederanschrauben im Klassenzimmer",
				checked : false
			}
		],
		author: "STO",
		room : "2.102",
		duedate : "2.1.2022"
	},
	];

	let tickets = demotickets;

</script>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

</style>

<Navbar></Navbar>

<br>

<div class="m-2">
	<label class="flex items-center mb-2 border border-gray-300 rounded-md shadow-sm">
		<button class="inline-flex px-2 bg-gray-200 rounded-l-md focus:outline-none">&#128269</button>
		<input type="text" class="flex-1 px-1 appearance-none bg-gray-100 rounded-md focus:ring-blue-200 focus:border-blue-400 focus:outline-none" placeholder="Suche">
	</label>
	<button class="w-full text-sm border border-blue-400 rounded-md shadow-sm focus:outline-none">
		<p>+ Neues Ticket</p>
	</button>
</div>

{#each tickets as ticket}
	<div class="m-2">
		<Ticket ticket={ticket}></Ticket>
	</div>
{/each}

<Alert></Alert>

