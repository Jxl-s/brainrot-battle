<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="min-h-screen bg-gray-950 text-white">
	<Navbar />
	<div class="pt-4">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		/* font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif; */
		font-family: 'Poppins', sans-serif;
	}
</style>
