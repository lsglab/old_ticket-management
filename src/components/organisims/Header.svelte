<script>
    import Topnav from "../molecules/Topnav.svelte"
    import SidenavButton from "../atoms/SidenavButton.svelte"

    export let htw;

</script>

<!--
	@component
	A bar at the top of the screen. It serves as a container for the top navigation in widescreens or
    holds the button to open the side navigation on small-width dispalys.
-->

<header class="bg-gray-50 border-blue-200 border-b">
    <div class="max-w-full px-4">
        <div class="relative flex flex-wrap items-center">
            <div class="flex flex-1 flex-shrink-0 items-center">
                <img class="h-6 w-auto" src="" alt="TM">
            </div>
        {#if !htw}
            <Topnav/>
        {:else} 
            <SidenavButton/>
        {/if}
        </div>
    </div>
 </header>