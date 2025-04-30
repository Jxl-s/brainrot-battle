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
