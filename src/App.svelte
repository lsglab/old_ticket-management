<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./routes/home.svelte";
	//import Tickets from "./routes/tickets.svelte";
	import Inbox from "./routes/inbox.svelte";
	import InProcess from "./routes/inprocess.svelte";
	import Done from "./routes/done.svelte";
	import Archive from "./routes/archive.svelte";
	import Trash from "./routes/trash.svelte";
	
	import Sidenav from "./components/molecules/Sidenav.svelte"
	import Header from "./components/organisims/Header.svelte"

	import config from "./config";

	let tickets;

	let archive;

	let deviceready

	let url = "";
	
	let width;

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

<svelte:window bind:outerWidth={width}/>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>


<Router url="{url}">
	<Header/>
	{#if width < 400}
		<Sidenav/>
	{/if}
	<div>
	  <Route path="/"><Home user={APP_USER}/></Route>
	  <!--<Route path="tickets"><Tickets bind:this={tickets}/></Route>-->
	  <Route path="inbox"><Inbox/></Route>
	  <Route path="inprocess"><InProcess/></Route>
	  <Route path="done"><Done/></Route>
	  <Route path="archive"><Archive bind:this={archive}/></Route>
	  <Route path="trash"><Trash/></Route>
	</div>
</Router>
