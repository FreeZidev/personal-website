import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check for saved theme preference or default to system preference
function getInitialTheme(): boolean {
	if (!browser) return false;
	
	const saved = localStorage.getItem('theme');
	if (saved) {
		return saved === 'dark';
	}
	
	// Check system preference
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function createDarkMode() {
	const { subscribe, set, update } = writable<boolean>(getInitialTheme());

	return {
		subscribe,
		toggle: () => update(n => {
			const newValue = !n;
			if (browser) {
				localStorage.setItem('theme', newValue ? 'dark' : 'light');
				document.documentElement.classList.toggle('dark', newValue);
			}
			return newValue;
		}),
		set: (value: boolean) => {
			if (browser) {
				localStorage.setItem('theme', value ? 'dark' : 'light');
				document.documentElement.classList.toggle('dark', value);
			}
			set(value);
		},
		init: () => {
			if (browser) {
				const isDark = getInitialTheme();
				document.documentElement.classList.toggle('dark', isDark);
				set(isDark);
				
				// Listen for system theme changes
				window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
					if (!localStorage.getItem('theme')) {
						set(e.matches);
						document.documentElement.classList.toggle('dark', e.matches);
					}
				});
			}
		}
	};
}

export const darkMode = createDarkMode();

