<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/data/translations';
	import { contact as contactData } from '$lib/data/content';
	
	$: t = translations[$language];
	$: currentContact = {
		...contactData,
		location: t.contact.locationValue
	};
</script>

<svelte:head>
	<title>{t.hero.name} - {t.hero.title}</title>
	<meta name="description" content="{$language === 'sk' ? 'Portfolio stránka Ľubomíra Foľtu - IT nadšenec, servisný technik a študent Počítačových sietí na TUKE' : 'Portfolio of Ľubomír Foľta - IT enthusiast, service technician and Computer Networks student at TUKE'}" />
</svelte:head>

<Navigation />

<Hero name={t.hero.name} title={t.hero.title} subtitle={t.hero.subtitle} />
<About title={t.about.title} content={t.about.content} />
<Experience title={t.experience.title} experiences={t.experience.items} />
<Skills title={t.skills.title} skills={t.skills.items} />
<Contact title={t.contact.title} contact={currentContact} t={t.contact} />

