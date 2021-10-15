<script>
    import Swipe from "../atoms/Swipe.svelte"

    let swipes = [];
</script>

<!--
	@component
	Container for a set of Swipes. Auto-spaces the list when items are removed or added.
-->

<div class="flex flex-col z-0 overflow-x-hidden fixed w-screen h-screen">
    {#each swipes as swipe}
    <Swipe>

    </Swipe>
    {/each}
</div>
