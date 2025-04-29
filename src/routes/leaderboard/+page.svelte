<script lang="ts">
	import { onMount } from 'svelte';

	interface LeaderboardEntry {
		id: string;
		url: string;
		name: string;
		description: string;
		elo: number;
		rank: number;
	}

	let leaderboard: LeaderboardEntry[] = [];
	let loading = true;

	async function fetchLeaderboard() {
		try {
			const response = await fetch('/api/leaderboard');
			if (!response.ok) throw new Error('Failed to fetch leaderboard');
			leaderboard = await response.json();
		} catch (error) {
			console.error('Error fetching leaderboard:', error);
		} finally {
			loading = false;
		}
	}

	onMount(fetchLeaderboard);
</script>

<svelte:head>
	<title>Leaderboard - Brainrot Battle</title>
</svelte:head>

<main class="min-h-screen py-8">
	<div class="container-padding">
		<!-- Header -->
		<div class="mb-8 text-center">
			<h1 class="mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
				Global Leaderboard
			</h1>
			<p class="text-gray-300">See which brainrot is dominating the competition!</p>
		</div>

		{#if loading}
			<!-- Skeleton Loader -->
			<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-gray-800 shadow-xl">
				<table class="w-full animate-pulse">
					<thead>
						<tr class="border-b border-gray-700 bg-gray-900">
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Image</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">ELO Rating</th>
						</tr>
					</thead>
					<tbody>
						{#each Array(5) as _, i}
							<tr class="border-b border-gray-700">
								<td class="px-6 py-4">
									<div class="h-8 w-8 rounded-full bg-gray-700"></div>
								</td>
								<td class="px-6 py-4">
									<div class="h-16 w-16 rounded-lg bg-gray-700"></div>
								</td>
								<td class="px-6 py-4">
									<div class="mb-2 h-4 w-32 rounded bg-gray-700"></div>
									<div class="h-3 w-48 rounded bg-gray-700"></div>
								</td>
								<td class="px-6 py-4">
									<div class="h-5 w-16 rounded bg-gray-700"></div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else if leaderboard.length === 0}
			<div class="text-center">
				<p class="text-gray-300">No brainrot have battled yet!</p>
			</div>
		{:else}
			<!-- Actual Leaderboard Table -->
			<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-gray-800 shadow-xl">
				<table class="w-full">
					<thead>
						<tr class="border-b border-gray-700 bg-gray-900">
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Image</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>
							<th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">ELO Rating</th>
						</tr>
					</thead>
					<tbody>
						{#each leaderboard as entry}
							<tr class="border-b border-gray-700 transition-colors hover:bg-gray-700">
								<td class="px-6 py-4">
									<span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
										{entry.rank}
									</span>
								</td>
								<td class="px-6 py-4">
									<img src={entry.url} alt={entry.name} class="h-16 w-16 rounded-lg object-cover" />
								</td>
								<td class="px-6 py-4">
									<div>
										<p class="font-semibold text-gray-100">{entry.name}</p>
										<p class="text-sm text-gray-400">{entry.description}</p>
									</div>
								</td>
								<td class="px-6 py-4">
									<span class="text-lg font-semibold text-blue-400">{entry.elo}</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</main>