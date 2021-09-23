<script>
    import RegisterCard from "./basic/RegisterCard.svelte";

    let tabs = [
        {
            title : "Neu",
        },
        {
            title : "In Bearbeitung",
        },
        {
            title : "Abgeschlossen",
        },
        {
            title : "+ Register erstellen",
        },
    ];

    export let status = {
        activeTab : tabs[0]
    }

</script>

<!--
	@component
	A register with switchable tabs and variable content underneath. 
-->

<style>

</style>

<div class="p-2">
    <div class="flex space-x-2 overflow-hidden">
        {#each tabs as tab}
            <button on:click={()=>{status.activeTab = tab}} class="px-2 py-2 rounded-lg border-2 transition transition-colors focus:outline-none {tab == status.activeTab ? 'bg-blue-50 border-blue-300' : ''} {tab.title == "+" ? 'bg:blue-300' : ''}">{tab.title}</button>
        {/each}
    </div>
    <div>
        <slot></slot>
    </div>
</div>
