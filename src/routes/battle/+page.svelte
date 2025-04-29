<script lang="ts">
	import { onMount } from 'svelte';

	interface Brainrot {
		id: string;
		url: string;
		name: string;
		description: string;
		elo: number;
	}

	interface Battle {
		left: Brainrot;
		right: Brainrot;
	}

	let currentBattle: Battle | null = null;
	let isVoting = false;
	let clickedId: string | null = null;

	async function handleVote(winnerId: string) {
		if (isVoting || !currentBattle) return;
		clickedId = winnerId;
		isVoting = true;

		try {
			const response = await fetch('/api/battle/vote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					leftId: currentBattle.left.id,
					rightId: currentBattle.right.id,
					winnerId
				})
			});

			if (!response.ok) throw new Error('Failed to submit vote');

			// Let the pop animation play out before fetching new battle
			setTimeout(async () => {
				clickedId = null;
				await fetchNewBattle();
				isVoting = false;
			}, 200);
		} catch (error) {
			console.error('Error voting:', error);
			clickedId = null;
			isVoting = false;
		}
	}

	async function fetchNewBattle() {
		try {
			const response = await fetch('/api/battle/new');
			if (!response.ok) throw new Error('Failed to fetch new battle');
			currentBattle = await response.json();
		} catch (error) {
			console.error('Error fetching battle:', error);
		}
	}

	async function handleSkip() {
		if (isVoting) return;
		await fetchNewBattle();
	}

	onMount(async () => {
		await fetchNewBattle();
	});
</script>

<svelte:head>
	<title>Battle - Brainrot Battle</title>
	<meta name="description" content="Battle and rank your favorite images using ELO rating system" />
</svelte:head>

<main class="min-h-screen py-8">
	<div class="container-padding">
		<!-- Header -->
		<div class="mb-8 text-center">
			<h1 class="mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
				Choose Your Winner
			</h1>
			<p class="text-gray-300">Click on the image you think deserves to win!</p>
		</div>

		{#if currentBattle}
			<div class="mx-auto max-w-6xl">
				<div class="grid gap-8 md:grid-cols-2">
					<!-- Left Image -->
					<button
						class={`battle-card group transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedId === currentBattle.left.id ? 'scale-110' : ''
						}`}
						on:click={() => handleVote(currentBattle.left.id)}
						disabled={isVoting}
					>
						<img
							src={currentBattle.left.url}
							alt={currentBattle.left.name}
							class="h-full w-full object-cover"
						/>
						<div class="elo-badge">
							<p class="text-white">ELO: {currentBattle.left.elo}</p>
						</div>
					</button>

					<!-- Right Image -->
					<button
						class={`battle-card group transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedId === currentBattle.right.id ? 'scale-110' : ''
						}`}
						on:click={() => handleVote(currentBattle.right.id)}
						disabled={isVoting}
					>
						<img
							src={currentBattle.right.url}
							alt={currentBattle.right.name}
							class="h-full w-full object-cover"
						/>
						<div class="elo-badge">
							<p class="text-white">ELO: {currentBattle.right.elo}</p>
						</div>
					</button>
				</div>

				<!-- VS Badge -->
				<div class="relative">
					<div
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 px-6 py-2 text-xl font-bold text-white shadow-lg"
					>
						VS
					</div>
				</div>
			</div>

			<!-- Skip Button -->
			<div class="mt-8 text-center">
				<button
					class="btn-primary"
					on:click={handleSkip}
					disabled={isVoting}
				>
					Skip This Battle
				</button>
			</div>
		{:else}
			<div class="text-center">
				<p class="text-gray-300">Loading battle...</p>
			</div>
		{/if}
	</div>
</main>
