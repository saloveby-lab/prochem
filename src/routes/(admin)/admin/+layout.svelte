<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/admin/Navbar.svelte';
	import '../../../custom.css';

	// Get the current page
	$: pageCurrent = $page.url.pathname.split('/').pop();
</script>

<div class="main-wrapper">
	<Navbar />
	<slot />
	<Footer />
</div>
