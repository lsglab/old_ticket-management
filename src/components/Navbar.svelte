<script>

  export let segment;

  let notify = {
    home : true,
    ticket : false,
    archive : false
  }

</script>

<style>

[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		width: calc(100% - 1em);
		height: 2px;
		@apply bg-blue-400;
		display: block;
		bottom: -1px;
	}

</style>
   
<nav class="bg-gray-50 border-blue-200 border-b">
   <div class="max-w-full px-4">
     <div class="relative flex flex-wrap items-center">
      <div class="flex flex-1 flex-shrink-0 items-center">
        <img class="h-6 w-auto" src="" alt="TM">
      </div>
        <div class="flex flex-wrap space-x-2">
          <span class="relative inline-flex">
            <a href="home" class="px-2 text-base leading-6 p-1 text-sm" aria-current="{segment === undefined ? 'page' : undefined}">Home</a>
            {#if notify.home}
            <span class="flex absolute h-2 w-2 top-2 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute h-full w-full rounded-full bg-blue-600 opacity-50"></span>
              <span class="rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            {/if}
          </span>
          <span class="relative inline-flex">
            <a href="home" class="px-2 text-base leading-6 p-1 text-sm">Tickets</a>
            {#if notify.ticket}
            <span class="flex absolute h-2 w-2 top-2 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute h-full w-full rounded-full bg-blue-600 opacity-50"></span>
              <span class="rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            {/if}
          </span>
          <span class="relative inline-flex">
            <a href="home" class="px-2 text-base leading-6 p-1 text-sm">Archiv</a>
            {#if notify.archive}
            <span class="flex absolute h-2 w-2 top-2 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute h-full w-full rounded-full bg-blue-600 opacity-50"></span>
              <span class="rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            {/if}
          </span>
        </div>
     </div>
   </div>
</nav>
