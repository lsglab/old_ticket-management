<script>
    import { Link } from "svelte-routing";
    import { notify } from "../../stores.js";
    import { sidenav } from "../../stores.js";

    export let to = "/";
    export let title = "Home";

    let notified;

</script>

<!--
	@component
	A single tab / link in a navigation menu. Used by both "Navbar.svelte" and "Sidebar.svelte".
-->

<style>
    .animate {
        animation: pulse 1.2s infinite ease-out;
    }
    
    @keyframes pulse {
        from {
            @apply bg-blue-300; @apply opacity-10;
        }
        to {
            @apply bg-blue-300; @apply opacity-40;
        }
    }
</style>

<div class="relative inline-flex">
    <div class="{notified ? 'animate:' : ''} absolute inline-flex h-full w-full"></div>
    <Link on:click={() => {sidenav.close()}} {to} class="px-2 text-base leading-6 p-1 text-sm">{title}</Link>
</div>