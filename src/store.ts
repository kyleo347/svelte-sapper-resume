import { writable } from 'svelte/store';
function createDrawerOpen() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () => update(open => !open),
	};
}
export const drawerOpen = createDrawerOpen();