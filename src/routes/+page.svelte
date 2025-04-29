<script>
	import { SwordIcon, TrophyIcon } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Brainrot Battle</title>
	<meta
		name="description"
		content="Battle and rank your favorite brainrot using ELO rating system"
	/>
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="container-padding py-20">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="text-left">
				<h1
					class="mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-6xl font-bold text-transparent"
				>
					Brainrot Battle
				</h1>
				<p class="mb-8 text-xl text-gray-300">
					Join the ultimate brainrot ranking tournament! Battle your favorite brainrot and discover
					which ones truly stand out using our ELO rating system.
				</p>
				<div class="flex gap-4">
					<a href="/battle" class="btn-primary glow">
						<SwordIcon class="me-2 h-6 w-6" />
						Start Battling
					</a>

					<a href="/leaderboard" class="btn-secondary glow">
						<TrophyIcon class="me-2 h-6 w-6" />
						View Leaderboard
					</a>
				</div>
			</div>
			<div class="relative">
				<div class="glow w-full overflow-hidden rounded-lg">
					<img src="/hero.webp" alt="Brainrot Battle Hero" class="h-full w-full object-cover" />
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
					Each brainrot has an ELO rating that changes based on battle outcomes, creating a dynamic
					ranking system.
				</p>
			</div>
			<div class="card glow">
				<h3 class="mb-4 text-xl font-bold text-blue-400">Fair Battles</h3>
				<p class="text-gray-300">
					Brainrot are matched based on their current ratings, ensuring fair and exciting battles
					between similarly ranked content.
				</p>
			</div>
			<div class="card glow">
				<h3 class="mb-4 text-xl font-bold text-blue-400">Global Leaderboard</h3>
				<p class="text-gray-300">
					Track the top-ranked brainrot and see how your favorites perform against others in the
					community.
				</p>
			</div>
		</div>
	</section>

	<!-- How It Works Section -->
	<section class="container-padding py-16">
		<h2 class="section-title">How It Works</h2>
		<div class="mx-auto max-w-3xl">
			<div class="mb-8 flex items-center">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white"
				>
					1
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Choose Your Battle</h3>
					<p class="text-gray-300">Select two brainrot to battle against each other</p>
				</div>
			</div>
			<div class="mb-8 flex items-center">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white"
				>
					2
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Vote for the Winner</h3>
					<p class="text-gray-300">Pick your favorite brainrot from the pair</p>
				</div>
			</div>
			<div class="flex items-center">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white"
				>
					3
				</div>
				<div class="ml-4">
					<h3 class="mb-2 text-xl font-bold text-gray-100">Watch Rankings Change</h3>
					<p class="text-gray-300">See how the ELO ratings update in real-time</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="container-padding py-20 text-center">
		<h2 class="mb-6 text-4xl font-bold text-gray-100">Suggest New Brainrot</h2>
		<p class="mb-8 text-lg text-gray-300">
			Have a brainrot that's missing? Let me know! I'm looking to add more brainrot to the battle
			arena.
			<br />
			Just send me an email or reach out to me on LinkedIn!
		</p>
		<div class="flex justify-center gap-8">
			<a
				href="mailto:jiaxuanli.6231@gmail.com"
				class="flex items-center gap-2 text-gray-300 hover:text-blue-400"
			>
				<svg
					width="27"
					height="27"
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-red-400"
				>
					<path
						d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
						fill="currentColor"
					/>
				</svg>
				<span>Email</span>
			</a>
			<a
				href="https://www.linkedin.com/in/li-jiaxuan"
				target="_blank"
				class="flex items-center gap-2 text-gray-300 hover:text-blue-400"
			>
				<svg
					width="27"
					height="27"
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-blue-400"
				>
					<path
						d="M24.4554 0H1.94983C0.87175 0 0 0.851117 0 1.90341V24.5019C0 25.5541 0.87175 26.4104 1.94983 26.4104H24.4554C25.5335 26.4104 26.4104 25.5541 26.4104 24.507V1.90341C26.4104 0.851117 25.5335 0 24.4554 0ZM7.83544 22.5056H3.91514V9.89875H7.83544V22.5056ZM5.87529 8.18104C4.61667 8.18104 3.60048 7.16486 3.60048 5.9114C3.60048 4.65793 4.61667 3.64175 5.87529 3.64175C7.12875 3.64175 8.14493 4.65793 8.14493 5.9114C8.14493 7.1597 7.12875 8.18104 5.87529 8.18104ZM22.5056 22.5056H18.5905V16.3776C18.5905 14.9178 18.5647 13.035 16.5529 13.035C14.5154 13.035 14.2059 14.6289 14.2059 16.2744V22.5056H10.2959V9.89875H14.0512V11.6216H14.1028C14.6237 10.6312 15.903 9.5841 17.8064 9.5841C21.7731 9.5841 22.5056 12.1942 22.5056 15.5883V22.5056Z"
						fill="currentColor"
					/>
				</svg>
				<span>LinkedIn</span>
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer class="container-padding py-6 text-center text-sm text-gray-400">
		<p>&copy; {new Date().getFullYear()} Jia Xuan Li. All rights reserved.</p>
	</footer>
</main>
