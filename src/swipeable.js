export function swipeable(node) {
	let x;
	let mobile;

	function handleDown(event) {
		mobile = event instanceof TouchEvent;
		if(mobile) {
			x = event.touches[0].clientX;
			window.addEventListener('touchmove', handleMove);
			window.addEventListener('touchend', handleUp);
		} else {
			x  = event.clientX;
			window.addEventListener('mousemove', handleMove);
			window.addEventListener('mouseup', handleUp);
		}
		node.dispatchEvent(new CustomEvent('swipestart', {
			detail: {x}
		}));
	}

	function handleMove(event) {
		let dx;
		if(mobile) {
			dx = event.touches[0].clientX - x;
			x = event.touches[0].clientX

		} else {
			dx = event.clientX - x;
			x = event.clientX

		}

		node.dispatchEvent(new CustomEvent('swipemove', {
			detail: { x, dx }
		}));
	}

	function handleUp(event) {
		if(mobile) {
			window.removeEventListener('touchmove', handleMove);
			window.removeEventListener('touchend', handleUp);

		} else {
			window.removeEventListener('mousemove', handleMove);
			window.removeEventListener('mouseup', handleUp);
			x = event.clientX;

		}

		node.dispatchEvent(new CustomEvent('swipestop', {
			detail: { x }
		}));
	}

	node.addEventListener('touchstart', handleDown);
	node.addEventListener('mousedown', handleDown);


	return {
		destroy() {
			node.removeEventListener('touchstart', handleDown);
			node.addEventListener('touchdown', handleDown);

		}
	};
}