<script lang="ts">
  import { page } from '$app/stores';
  import { Github } from '@lucide/svelte';
</script>

<nav class="bg-gray-900 border-b border-gray-800">
  <div class="container-padding">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo/Brand -->
      <a href="/" class="flex items-center space-x-2 flex items-center gap-1">
        <img src="/favicon.png" alt="Logo" class="h-8 w-8" />
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
        <a
          href="https://github.com/Jxl-s/brainrot-battle"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium transition-colors hover:text-blue-400 text-gray-300 flex items-center gap-1"
        >
          <Github size={18} />
          <span class="font-semibold underline">GitHub</span>
        </a>
      </div>
    </div>
  </div>
</nav>