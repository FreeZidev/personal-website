<script lang="ts">
	interface Skill {
		name: string;
		category: string;
	}

	export let title: string;
	export let skills: Skill[];
	
	// Group skills by category
	$: groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<string, Skill[]>);
	
	$: categories = Object.keys(groupedSkills);
</script>

<section id="skills" class="py-24 px-4 relative bg-white dark:bg-gray-900">
	<div class="max-w-6xl mx-auto">
		<div class="mb-12 text-center">
			<h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100 mb-4">
				{title}
			</h2>
			<div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
		</div>
		
		<!-- Skills Grid - Simple Clean Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each categories as category, catIndex}
				<div class="group animate-slide-up" style="animation-delay: {catIndex * 0.1}s;">
					<!-- Category Card -->
					<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 h-full card-hover">
						<!-- Category Header -->
						<h3 class="text-xl font-display font-bold text-gray-900 dark:text-gray-100 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
							{category}
						</h3>
						
						<!-- Skills List - Simple -->
						<ul class="space-y-3">
							{#each groupedSkills[category] as skill}
								<li class="text-gray-700 dark:text-gray-300 flex items-center">
									<span class="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"></span>
									<span>{skill.name}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
