<script lang="ts">
	export let name: string;
	export let title: string;
	export let subtitle: string;
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
	<!-- Subtle background pattern -->
	<div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
	
	<div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
		<div class="mb-8 animate-fade-in">
			<h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 dark:text-gray-100 mb-6">
				{@html name.split('').map((char, i) => 
					`<span style="animation-delay: ${i * 0.05}s;" class="inline-block animate-slide-up">${char === ' ' ? '&nbsp;' : char}</span>`
				).join('')}
			</h1>
		</div>
		
		<div class="mb-8 animate-slide-up" style="animation-delay: 0.3s;">
			<h2 class="text-xl md:text-2xl lg:text-3xl font-display font-semibold gradient-text mb-4">
				{title}
			</h2>
			<div class="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto my-6"></div>
		</div>
		
		<div class="animate-slide-up" style="animation-delay: 0.5s;">
			<p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
				{subtitle}
			</p>
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-2 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
			<div class="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
		</div>
	</div>
</section>
