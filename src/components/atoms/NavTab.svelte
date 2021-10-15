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
            --tw-bg-opacity: 0.1;
            background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
        }
        to {
            --tw-bg-opacity: 0.4;
            background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
        }
    }
</style>

<div class="relative inline-flex">
    {#if notified}
        <div class="animate absolute inline-flex h-full w-full"></div>
    {/if}
    <Link on:click={() => {sidenav.close()}} {to} class="px-2 w-full text-base leading-6 p-1 text-md">{title}</Link>
</div>