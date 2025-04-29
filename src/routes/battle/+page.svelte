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
		id: string; // Added battle ID
		left: Brainrot;
		right: Brainrot;
	}

	let currentBattle: Battle | null = null;
	let isVoting = false;
	let clickedSide: 'left' | 'right' | null = null;

	async function handleVote(side: 'left' | 'right') {
		if (isVoting || !currentBattle) return;
		clickedSide = side;
		isVoting = true;

		try {
			const response = await fetch('/api/battle/vote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					battleId: currentBattle.id,
					winningSide: side
				})
			});

			if (!response.ok) throw new Error('Failed to submit vote');

			setTimeout(async () => {
				clickedSide = null;
				await fetchNewBattle();
				isVoting = false;
			}, 600); // Let animation play longer
		} catch (error) {
			console.error('Error voting:', error);
			clickedSide = null;
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
	<meta name="description" content="Battle and rank your favorite brainrot using ELO rating system" />
</svelte:head>

<main class="min-h-screen py-8">
	<div class="container-padding">
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
						class={`battle-card relative group transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedSide === 'left' ? 'scale-110 winner' :
							clickedSide && clickedSide !== 'left' ? 'loser' : ''
						}`}
						on:click={() => handleVote('left')}
						disabled={isVoting}
					>
						<img
							src={currentBattle.left.url}
							alt={currentBattle.left.name}
							class="h-full w-full object-cover"
						/>

						{#if clickedSide === 'left'}
							<!-- Checkmark -->
							<div class="checkmark absolute top-2 left-2 bg-green-500 rounded-full p-2 animate-pop">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						{/if}

						<div class="elo-badge">
							<p class="text-white">ELO: {currentBattle.left.elo}</p>
						</div>
					</button>

					<!-- Right Image -->
					<button
						class={`battle-card relative group transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedSide === 'right' ? 'scale-110 winner' :
							clickedSide && clickedSide !== 'right' ? 'loser' : ''
						}`}
						on:click={() => handleVote('right')}
						disabled={isVoting}
					>
						<img
							src={currentBattle.right.url}
							alt={currentBattle.right.name}
							class="h-full w-full object-cover"
						/>

						{#if clickedSide === 'right'}
							<!-- Checkmark -->
							<div class="checkmark absolute top-2 left-2 bg-green-500 rounded-full p-2 animate-pop">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						{/if}

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

<style>
	.winner {
		background-color: rgba(34, 197, 94, 0.1); /* Tailwind green-500 */
		border: 2px solid rgba(34, 197, 94, 0.7);
	}

	.loser {
		opacity: 0.4;
		filter: grayscale(80%);
	}

	.animate-pop {
		animation: pop 0.25s ease-out;
	}

	@keyframes pop {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(1);
		}
	}
</style>