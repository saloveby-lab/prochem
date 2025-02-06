// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { CustomLocals } from '$lib/types';
declare global {
	namespace App {
		// interface Error {}
		interface Locals extends CustomLocals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
