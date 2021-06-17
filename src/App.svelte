<script>
	
	import { Router, Route } from "svelte-routing";

	import Home from "./routes/home.svelte";
	import Tickets from "./routes/tickets.svelte";
	import Archive from "./routes/archive.svelte";

	import Navbar from "./components/Navbar.svelte";

	export let url = "";
	
	export let ready = false;

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

	let demouser = {
		name : "BHG"
	}

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
		duedate : "21.06.2022"
	},	
	{
		task : "Reparatur Beamer",
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
		duedate : "02.01.2022"
	},
	];

</script>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

</style>

<Router url="{url}">
	<Navbar></Navbar>
	<div>
	  <Route path="/"><Home user={demouser}/></Route>
	  <Route path="tickets"><Tickets tickets={demotickets}/></Route>
	  <Route path="archive"><Archive/></Route>
	</div>
</Router>

<br>

