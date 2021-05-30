<script>
    import { check_outros } from "svelte/internal";

    export let ticket;

    let editable = false;

    let open = false;

    let timer;

    function holdTimer() {
        if(!editable) {
            timer = setTimeout(function() {
                 editable = true
            }, 1500);
        }
    }

    function checkTimer() {
        if(timer != undefined) {
            clearTimeout(timer);
        }    
    }
</script>

<style>

    .body {
        height: 0;
        overflow: auto;
        transition: height 0.3s ease-in-out;
    }

    .open {
        height: 50%;
    }

</style>
   
<div class="bg-gray-100 rounded-sm border-gray-200 shadow">
    <button on:click={() => open = !open} class="flex w-full border-blue-200 border-b">
        <span class="pr-1 p-1 text-lg bg-blue-200">{ticket.task}</span>
        <span class="pr-1 p-1 text-lg bg-blue-200">{ticket.room}</span> 
    </button>
    <section on:mousedown={() => holdTimer()} on:mouseup={() => checkTimer()} class:open={open} class="body">
        
    </section>
</div>
