<script>
    import NavTab from "../atoms/NavTab.svelte";
    import config from "../../config.js";

    let tabs = config.navtabs;
</script>

<!--
	@component
	A navbar replacing the side navigation on wide screens.
-->

<style>

</style>

<div class="flex flex-wrap space-x-2">
  {#each tabs as tab}
    <NavTab {...tab}/>
  {/each}
</div>
