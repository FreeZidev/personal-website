<script lang="ts">
	import '../app.css';
	import { darkMode } from '$lib/stores/darkMode';
	import { language } from '$lib/stores/language';
	import { onMount } from 'svelte';

	onMount(() => {
		darkMode.init();
		language.init();
	});
</script>

<main class="min-h-screen">
	<slot />
</main>

