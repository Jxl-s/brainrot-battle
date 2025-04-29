<script>
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>Brainrot Battle</title>
	<meta name="description" content="Battle and rank your favorite images using ELO rating system" />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="container-padding py-20">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="text-left">
				<h1 class="mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-6xl font-bold text-transparent">
					Brainrot Battle
				</h1>
				<p class="mb-8 text-xl text-gray-300">
					Join the ultimate image ranking tournament! Battle your favorite images and discover which ones truly
					stand out using our ELO rating system.
				</p>
				<div class="flex gap-4">
					<a href="/battle" class="btn-primary glow"> Start Battling </a>
					<a href="/leaderboard" class="btn-primary glow"> View Leaderboard </a>
				</div>
			</div>
			<div class="relative">
				<div class="glow w-full overflow-hidden rounded-lg">
					<img
						src="/hero.png"
						alt="Brainrot Battle Hero"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="container-padding py-16">
		<div class="grid gap-8 md:grid-cols-3">
			<div class="card glow">
				<h3 class="mb-4 text-xl font-bold text-blue-400">ELO Ranking</h3>
				<p class="text-gray-300">
					Each brainrot has an ELO rating that changes based on battle outcomes, creating a dynamic ranking
					system.
				</p>
			</div>
			<div class="card glow">
				<h3 class="mb-4 text-xl font-bold text-blue-400">Fair Battles</h3>
				<p class="text-gray-300">
					Brainrot are matched based on their current ratings, ensuring fair and exciting battles between
					similarly ranked content.
				</p>
			</div>
			<div class="card glow">
				<h3 class="mb-4 text-xl font-bold text-blue-400">Global Leaderboard</h3>
				<p class="text-gray-300">
					Track the top-ranked brainrot and see how your favorites perform against others in the community.
				</p>
			</div>
		</div>
	</section>

	<!-- How It Works Section -->
	<section class="container-padding py-16">
		<h2 class="section-title">How It Works</h2>
		<div class="mx-auto max-w-3xl">
			<div class="mb-8 flex items-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
					1
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Choose Your Battle</h3>
					<p class="text-gray-300">Select two images to battle against each other</p>
				</div>
			</div>
			<div class="mb-8 flex items-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
					2
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Vote for the Winner</h3>
					<p class="text-gray-300">Pick your favorite image from the pair</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
					3
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Watch Rankings Change</h3>
					<p class="text-gray-300">See how the ELO ratings update in real-time</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="container-padding py-20 text-center">
		<h2 class="mb-6 text-4xl font-bold text-gray-100">Ready to Start?</h2>
		<p class="mb-8 text-xl text-gray-300">
			Join the community and help determine which images truly deserve the top spot!
		</p>
		<a href="/battle" class="btn-primary glow"> Enter the Battle </a>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}
</style>
