<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/data/translations';
	
	let scrolled = false;
	let mobileMenuOpen = false;
	
	$: currentLang = $language;
	$: t = translations[currentLang];
	$: name = t.hero.name;
	
	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
	
	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			mobileMenuOpen = false;
		}
	}
	
	function toggleDarkMode() {
		darkMode.toggle();
	}
	
	function toggleLanguage() {
		language.toggle();
	}
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'}">
	<div class="max-w-7xl mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<button 
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="text-xl font-display font-bold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
			>
				{name.split(' ').map(n => n[0]).join('')}
			</button>
			
			<div class="flex items-center gap-4">
				<!-- Desktop Navigation Links -->
				<div class="hidden md:flex items-center gap-8">
					<button 
						on:click={() => scrollToSection('about')}
						class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm uppercase tracking-wider transition-colors relative group"
					>
						{t.nav.about}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
					</button>
					<button 
						on:click={() => scrollToSection('experience')}
						class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm uppercase tracking-wider transition-colors relative group"
					>
						{t.nav.experience}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
					</button>
					<button 
						on:click={() => scrollToSection('skills')}
						class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm uppercase tracking-wider transition-colors relative group"
					>
						{t.nav.skills}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
					</button>
					<button 
						on:click={() => scrollToSection('contact')}
						class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm uppercase tracking-wider transition-colors relative group"
					>
						{t.nav.contact}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
					</button>
				</div>
				
				<div class="flex items-center gap-2 md:gap-4">
					<!-- Language Toggle -->
					<button
						on:click={toggleLanguage}
						class="px-2 md:px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-xs md:text-sm text-gray-700 dark:text-gray-300"
						aria-label="Toggle language"
					>
						{$language === 'sk' ? 'EN' : 'SK'}
					</button>
					
					<!-- Dark Mode Toggle -->
					<button
						on:click={toggleDarkMode}
						class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						aria-label="Toggle dark mode"
					>
						{#key $darkMode}
							{#if $darkMode}
								<!-- Sun icon for light mode -->
								<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							{:else}
								<!-- Moon icon for dark mode -->
								<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
								</svg>
							{/if}
						{/key}
					</button>
					
					<!-- Mobile Menu Toggle -->
					<button
						on:click={toggleMobileMenu}
						class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						aria-label="Toggle mobile menu"
					>
						{#if mobileMenuOpen}
							<!-- Close icon -->
							<svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<!-- Hamburger icon -->
							<svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
		
		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-gray-200 dark:border-gray-700 mt-2 pt-4 pb-2">
				<div class="flex flex-col gap-2">
					<button 
						on:click={() => scrollToSection('about')}
						class="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm uppercase tracking-wider transition-colors rounded-lg"
					>
						{t.nav.about}
					</button>
					<button 
						on:click={() => scrollToSection('experience')}
						class="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm uppercase tracking-wider transition-colors rounded-lg"
					>
						{t.nav.experience}
					</button>
					<button 
						on:click={() => scrollToSection('skills')}
						class="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm uppercase tracking-wider transition-colors rounded-lg"
					>
						{t.nav.skills}
					</button>
					<button 
						on:click={() => scrollToSection('contact')}
						class="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-sm uppercase tracking-wider transition-colors rounded-lg"
					>
						{t.nav.contact}
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
