import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Language = 'sk' | 'en';

// Check for saved language preference or default to Slovak
function getInitialLanguage(): Language {
	if (!browser) return 'sk';
	
	const saved = localStorage.getItem('language');
	if (saved === 'en' || saved === 'sk') {
		return saved;
	}
	
	// Default to Slovak
	return 'sk';
}

function createLanguage() {
	const { subscribe, set } = writable<Language>(getInitialLanguage());

	return {
		subscribe,
		set: (value: Language) => {
			if (browser) {
				localStorage.setItem('language', value);
			}
			set(value);
		},
		toggle: () => {
			let current: Language = 'sk';
			const unsubscribe = subscribe(value => {
				current = value;
			});
			unsubscribe();
			
			const newValue: Language = current === 'sk' ? 'en' : 'sk';
			if (browser) {
				localStorage.setItem('language', newValue);
			}
			set(newValue);
		},
		init: () => {
			if (browser) {
				const lang = getInitialLanguage();
				set(lang);
			}
		}
	};
}

export const language = createLanguage();

