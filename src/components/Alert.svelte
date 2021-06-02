<script>
    export let content;
</script>

<style>

    p {
        @apply text-sm;
        @apply inline;
    }

</style>
   
<nav class="fixed bottom-0 w-full bg-blue-100 border-blue-400 border-t">
    <div class="p-1">
        {#each content as item}
        {#if item.option}
            <button class="mx-0.5 px-0.5 border-2 border-blue-400 rounded-md focus:outline-none">
                 <p>{item.text}</p>
            </button>
        {:else}
            <p> {item.text}</p>
        {/if}
        {/each}
    </div>
 </nav>
