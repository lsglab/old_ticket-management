<script>
    import { spring } from 'svelte/motion';
    import { swipeable } from "../../swipeable.js"

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function notifyDirection(lft) {
        dispatch('swipeend', {
            left: lft
        });
    }

    //Broadcast the current lock state
    function notifyLock(lck) {
        dispatch('swipelock', {
            lock: lck
        });
    }

    const coords = spring({ x: 0}, {
		stiffness: 0.1,
		damping: 0.5
	});

    function handleSwipeStart() {
        notifyLock(true);
	}

	function handleSwipeMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
		}));
	}

	function handleSwipeEnd(event) {
		if($coords.x > innerWidth / 8) {
			coords.set({ x: innerWidth / 1.2});
            notifyDirection(false);
		} else if($coords.x < -innerWidth / 8) {
			coords.set({ x: -innerWidth / 1.2});
            notifyDirection(true);
		} else {
			coords.set({ x: 0});
		}
        notifyLock(false);
	}

</script>

<!--
	@component
	Wrapper component for elements in swipe lists. Can be moved offscreen to the left or the right.
    Dispatches an events indicating where it was moved to.
-->

<style>

</style>
<div class="absolute left-2/4 cursor-move"
	use:swipeable
	on:swipestart={handleSwipeStart}
	on:swipemove={handleSwipeMove}
	on:swipestop={handleSwipeEnd}
	style="transform:translate({$coords.x}px)">
    <div class="relative -left-2/4">
        <slot>
            Fallback content
        </slot>
    </div>
</div>
