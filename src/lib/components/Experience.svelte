<script lang="ts">
	interface Experience {
		title: string;
		company: string;
		period: string;
		description: string[];
	}

	export let title: string;
	export let experiences: Experience[];
</script>

<section id="experience" class="py-24 px-4 relative bg-gray-50 dark:bg-gray-800">
	<div class="max-w-5xl mx-auto">
		<div class="mb-12 text-center">
			<h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100 mb-4">
				{title}
			</h2>
			<div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
		</div>
		
		<div class="space-y-8 relative">
			<!-- Timeline line -->
			<div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 dark:from-primary-800 via-primary-400 dark:via-primary-600 to-primary-200 dark:to-primary-800 hidden md:block"></div>
			
			{#each experiences as exp, index}
				<div class="relative pl-0 md:pl-20 animate-slide-up" style="animation-delay: {index * 0.15}s;">
					<!-- Timeline dot -->
					<div class="absolute left-0 top-4 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block -translate-x-[9px]"></div>
					
					<!-- Experience card -->
					<div class="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 border border-gray-100 dark:border-gray-700 card-hover">
						<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
							<div>
								<h3 class="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-gray-100 mb-2">
									{exp.title}
								</h3>
								<p class="text-lg text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
							</div>
							<div>
								<span class="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
									{exp.period}
								</span>
							</div>
						</div>
						
						<ul class="space-y-3 mt-6">
							{#each exp.description as desc}
								<li class="text-gray-600 dark:text-gray-300 flex items-start">
									<span class="text-primary-500 dark:text-primary-400 mr-3 mt-1.5">▸</span>
									<span>{desc}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
