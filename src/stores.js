import { writable } from 'svelte/store';

function makeNotify() {
    const { subscribe } = writable([]);

	return {
		subscribe,
        add: (route) => update(notify_ => notify_.push(route)),
        remove: (route) => update(notify_ => notify_.filter((value) => {return value != route}))
	};
}

export const notify = makeNotify();

function makeSidenav() {
    const { subscribe, set, update } = writable({
        open : false,
    });

	return {
		subscribe, 
        toggle: () => update(sidenav_ => {
            return {
                open : !sidenav_.open
            };
        }),
        open: () => set({
            open : true
         }),
        close: () => set({
           open : false
        })
	};
}

export const sidenav = makeSidenav();
