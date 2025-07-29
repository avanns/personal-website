<script>
	import { onMount } from 'svelte';

	let isDark = false;

	onMount(() => {
		// Check for saved theme preference or default to light
		const savedTheme = localStorage.getItem('theme');
		if (
			savedTheme === 'dark' ||
			(!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle dark mode">
	<div class="toggle-icon">
		{#if isDark}
			<!-- Sun icon for dark mode -->
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<circle cx="12" cy="12" r="5" />
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
			</svg>
		{:else}
			<!-- Moon icon for light mode -->
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
		{/if}
	</div>
</button>

<style>
	.theme-toggle {
		background: none;
		border: 2px solid var(--color-border);
		padding: 0.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 40px;
		height: 40px;
	}

	.theme-toggle:hover {
		background: var(--color-bg-secondary);
	}

	.theme-toggle:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-accent);
	}

	.toggle-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
	}

	.toggle-icon svg {
		transition: transform 0.3s ease;
	}

	.theme-toggle:hover .toggle-icon svg {
		transform: scale(1.1);
	}
</style>
