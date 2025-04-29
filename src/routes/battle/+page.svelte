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
		id: string;
		left: Brainrot;
		right: Brainrot;
	}

	const K_FACTOR = 32;

	function calculateNewRatings(winnerElo: number, loserElo: number) {
		const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
		const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));

		const newWinnerElo = Math.round(winnerElo + K_FACTOR * (1 - expectedWinner));
		const newLoserElo = Math.round(loserElo + K_FACTOR * (0 - expectedLoser));

		return {
			winnerElo: newWinnerElo,
			loserElo: newLoserElo
		};
	}

	let currentBattle: Battle | null = null;
	let isVoting = false;
	let clickedSide: 'left' | 'right' | null = null;
	let skipped = false;

	let leftEloDelta = 0;
	let rightEloDelta = 0;

	async function handleVote(side: 'left' | 'right') {
		if (isVoting || !currentBattle) return;
		clickedSide = side;
		isVoting = true;

		const { winnerElo, loserElo } = calculateNewRatings(
			side === 'left' ? currentBattle.left.elo : currentBattle.right.elo,
			side === 'left' ? currentBattle.right.elo : currentBattle.left.elo
		);

		if (side === 'left') {
			leftEloDelta = winnerElo - currentBattle.left.elo;
			rightEloDelta = loserElo - currentBattle.right.elo;
		} else {
			rightEloDelta = winnerElo - currentBattle.right.elo;
			leftEloDelta = loserElo - currentBattle.left.elo;
		}

		try {
			await fetch('/api/battle/vote', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					battleId: currentBattle.id,
					winningSide: side
				})
			});
		} catch (error) {
			console.error('Error voting:', error);
		}

		setTimeout(async () => {
			resetState();
			await fetchNewBattle();
		}, 600);
	}

	async function skipBattle(id: string) {
		try {
			await fetch('/api/battle/skip', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ battleId: id })
			});
		} catch (error) {
			console.error('Error skipping battle:', error);
		}
	}

	async function handleSkip() {
		if (isVoting || !currentBattle) return;
		skipped = true;
		isVoting = true;

		await skipBattle(currentBattle.id);

		setTimeout(async () => {
			resetState();
			await fetchNewBattle();
		}, 600);
	}

	function resetState() {
		clickedSide = null;
		leftEloDelta = 0;
		rightEloDelta = 0;
		skipped = false;
		isVoting = false;
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

	onMount(async () => {
		await fetchNewBattle();
	});
</script>

<svelte:head>
	<title>Battle - Brainrot Battle</title>
	<meta
		name="description"
		content="Battle and rank your favorite brainrot using ELO rating system"
	/>
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
			<div class="mx-auto flex max-w-6xl flex-col items-center">
				<div class="grid w-full max-w-4xl gap-8 md:grid-cols-2">
					<!-- Left -->
					<button
						class={`battle-card group relative transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedSide === 'left'
								? 'winner scale-110'
								: clickedSide && clickedSide !== 'left'
									? 'loser'
									: skipped
										? 'loser fade-out'
										: ''
						}`}
						on:click={() => handleVote('left')}
						disabled={isVoting}
					>
						<img
							src={currentBattle.left.url}
							alt={currentBattle.left.name}
							class="h-full w-full rounded object-cover"
						/>

						<!-- ELO label -->
						<div
							class={`absolute top-4 left-4 flex items-center gap-1 rounded bg-black/60 px-3 py-1 text-sm ${
								clickedSide === 'left'
									? 'font-bold text-green-400'
									: clickedSide === 'right'
										? 'font-bold text-red-400'
										: 'text-white'
							}`}
						>
							ELO:
							{clickedSide ? currentBattle.left.elo + leftEloDelta : currentBattle.left.elo}

							{#if clickedSide && leftEloDelta !== 0}
								<span class="animate-elo-change text-xs">
									{leftEloDelta > 0 ? '+' : ''}{leftEloDelta}
								</span>
							{/if}
						</div>

						<!-- Name -->
						<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded bg-black/60 px-3 py-1 text-sm text-white">
							{currentBattle.left.name}
						</div>

						{#if clickedSide === 'left'}
							<div class="checkmark animate-pop absolute inset-0 flex items-center justify-center">
								<div class="rounded-full bg-green-500 p-3 shadow-lg">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
									</svg>
								</div>
							</div>
						{/if}
					</button>

					<!-- Right -->
					<button
						class={`battle-card group relative transform transition duration-150 ease-in-out hover:scale-[1.02] active:scale-95 ${
							clickedSide === 'right'
								? 'winner scale-110'
								: clickedSide && clickedSide !== 'right'
									? 'loser'
									: skipped
										? 'loser fade-out'
										: ''
						}`}
						on:click={() => handleVote('right')}
						disabled={isVoting}
					>
						<img
							src={currentBattle.right.url}
							alt={currentBattle.right.name}
							class="h-full w-full rounded object-cover"
						/>

						<!-- ELO label -->
						<div
							class={`absolute top-4 left-4 flex items-center gap-1 rounded bg-black/60 px-3 py-1 text-sm ${
								clickedSide === 'right'
									? 'font-bold text-green-400'
									: clickedSide === 'left'
										? 'font-bold text-red-400'
										: 'text-white'
							}`}
						>
							ELO:
							{clickedSide ? currentBattle.right.elo + rightEloDelta : currentBattle.right.elo}

							{#if clickedSide && rightEloDelta !== 0}
								<span class="animate-elo-change text-xs">
									{rightEloDelta > 0 ? '+' : ''}{rightEloDelta}
								</span>
							{/if}
						</div>

						<!-- Name -->
						<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded bg-black/60 px-3 py-1 text-sm text-white">
							{currentBattle.right.name}
						</div>

						{#if clickedSide === 'right'}
							<div class="checkmark animate-pop absolute inset-0 flex items-center justify-center">
								<div class="rounded-full bg-green-500 p-3 shadow-lg">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
									</svg>
								</div>
							</div>
						{/if}
					</button>
				</div>

				<!-- VS Badge -->
				<div class="relative">
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 px-6 py-2 text-xl font-bold text-white shadow-lg">
						VS
					</div>
				</div>
			</div>

			<!-- Skip Button -->
			<div class="mt-8 text-center">
				<button class="btn-primary" on:click={handleSkip} disabled={isVoting}>
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
		background-color: rgba(34, 197, 94, 0.1);
		border: 2px solid rgba(34, 197, 94, 0.7);
	}

	.loser {
		opacity: 0.4;
		filter: grayscale(80%);
		transition: all 0.3s ease;
	}

	.fade-out {
		animation: fadeOut 0.4s ease-in forwards;
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0.4;
			transform: scale(0.98);
		}
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

	.animate-elo-change {
		animation: eloChange 0.3s ease-out;
	}

	@keyframes eloChange {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>