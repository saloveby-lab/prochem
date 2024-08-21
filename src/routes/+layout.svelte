<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../custom.css';

	// Get the current page
	$: pageCurrent = $page.url.pathname.split('/').pop();
	$: console.log(pageCurrent);
</script>

<div class="main-wrapper">
	{#if pageCurrent !== 'login'}
		<Navbar />
		<slot />
		<Footer />
	{:else}
		<slot />
	{/if}
</div>
