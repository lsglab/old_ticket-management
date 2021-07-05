<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./routes/home.svelte";
	import Tickets from "./routes/tickets.svelte";
	import Archive from "./routes/archive.svelte";

	import Navbar from "./components/Navbar.svelte";

	let tickets;

	let archive;

	let deviceready

	let url = "";

	const APP_USER = "BHG";

	/*
 	* Event listeners for the cordova API or mobile device events
 	*/
	document.addEventListener("deviceready", () => {
		deviceready = true;
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

</script>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>


<Router url="{url}">
	<Navbar></Navbar>
	<div>
	  <Route path="/"><Home user={APP_USER}/></Route>
	  <Route path="tickets"><Tickets bind:this={tickets}/></Route>
	  <Route path="archive"><Archive bind:this={archive}/></Route>
	</div>
</Router>
