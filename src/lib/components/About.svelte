<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<section id="about" class="py-24 px-4 relative bg-white dark:bg-gray-900">
	<div class="max-w-4xl mx-auto">
		<div class="mb-12 text-center">
			<h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100 mb-4">
				{title}
			</h2>
			<div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
		</div>
		
		<div class="relative">
			<!-- Clean card -->
			<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700 card-hover">
				<div class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
					{@html content.split('\n').map(p => p.trim()).filter(p => p).map(p => `<p class="mb-4">${p}</p>`).join('')}
				</div>
			</div>
		</div>
	</div>
</section>
