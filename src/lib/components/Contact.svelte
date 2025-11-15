<script lang="ts">
	interface ContactInfo {
		email: string;
		location: string;
		linkedin: string;
		website: string;
	}

	interface ContactTranslations {
		email: string;
		location: string;
		linkedin: string;
		linkedinValue: string;
	}

	export let title: string;
	export let contact: ContactInfo;
	export let t: ContactTranslations;
</script>

<section id="contact" class="py-24 px-4 relative bg-gray-50 dark:bg-gray-800">
	<div class="max-w-4xl mx-auto">
		<div class="mb-12 text-center">
			<h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100 mb-4">
				{title}
			</h2>
			<div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
		</div>
		
		<div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
				<!-- Email -->
				<a 
					href="mailto:{contact.email}"
					class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-md transition-all card-hover group"
				>
					<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-500 dark:group-hover:bg-primary-600 transition-colors">
						<svg class="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div>
						<div class="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.email}</div>
						<div class="text-gray-900 dark:text-gray-100 font-medium">{contact.email}</div>
					</div>
				</a>
				
				<!-- Location -->
				<div class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
					<div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<div>
						<div class="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.location}</div>
						<div class="text-gray-900 dark:text-gray-100 font-medium">{contact.location}</div>
					</div>
				</div>
				
				<!-- LinkedIn -->
				<a 
					href="https://{contact.linkedin}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-md transition-all card-hover group"
				>
					<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-500 dark:group-hover:bg-primary-600 transition-colors">
						<svg class="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</div>
					<div>
						<div class="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.linkedin}</div>
						<div class="text-gray-900 dark:text-gray-100 font-medium">{t.linkedinValue}</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

