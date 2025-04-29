<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="bg-gray-900 border-b border-gray-800">
  <div class="container-padding">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo/Brand -->
      <a href="/" class="flex items-center space-x-2">
        <span class="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
          Brainrot Battle
        </span>
      </a>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-8">
        <a
          href="/"
          class="text-sm font-medium transition-colors hover:text-blue-400 {$page.url.pathname === '/'
            ? 'text-blue-400'
            : 'text-gray-300'}"
        >
          Home
        </a>
        <a
          href="/battle"
          class="text-sm font-medium transition-colors hover:text-blue-400 {$page.url.pathname === '/battle'
            ? 'text-blue-400'
            : 'text-gray-300'}"
        >
          Battle
        </a>
        <a
          href="/leaderboard"
          class="text-sm font-medium transition-colors hover:text-blue-400 {$page.url.pathname === '/leaderboard'
            ? 'text-blue-400'
            : 'text-gray-300'}"
        >
          Leaderboard
        </a>
      </div>
    </div>
  </div>
</nav> 