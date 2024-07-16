<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../custom.css';
</script>

<div class="main-wrapper">
	<Navbar />

	<slot />

	<Footer />
</div>
