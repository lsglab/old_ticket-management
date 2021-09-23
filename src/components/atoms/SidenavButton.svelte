<script>
    import { sidenav } from '../../stores.js';

</script>

<!--
	@component
	A button to trigger the open/close animation of the side navgation.
-->

<div class="flex h-full bg-gray-100">
    <div class="self-center">
        <button on:click={() => {sidenav.toggle()}} class="px-0.5 focus:outline-none">
            <svg class="h-8 w-2" fill="none" viewBox="0 0 10 20">
                <circle cx="5" cy="0" r="4" fill="gray" />
                <circle cx="5" cy="10" r="4" fill="gray" />
                <circle cx="5" cy="20" r="4" fill="gray" />
            </svg>
        </button>
    </div>
</div>