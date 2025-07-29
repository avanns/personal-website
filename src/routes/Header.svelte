<script>
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<header>
	<nav>
		<div class="nav-container">
			<div class="nav-brand">
				<a href="/">AUBIN VANNS</a>
			</div>
			<ul class="nav-links">
				<li>
					<a href="/" class={$page.url.pathname === '/' ? 'active' : ''}> HOME </a>
				</li>
				<li>
					<a href="/coding" class={$page.url.pathname.startsWith('/coding') ? 'active' : ''}>
						CODING
					</a>
				</li>
				<li>
					<a href="/music" class={$page.url.pathname.startsWith('/music') ? 'active' : ''}>
						MUSIC
					</a>
				</li>
				<li>
					<a href="/circuits" class={$page.url.pathname.startsWith('/circuits') ? 'active' : ''}>
						CIRCUITS
					</a>
				</li>
				<li>
					<a href="/contact" class={$page.url.pathname.startsWith('/contact') ? 'active' : ''}>
						CONTACT
					</a>
				</li>
				<li class="theme-toggle-container">
					<ThemeToggle />
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	header {
		grid-area: header;
		background: var(--color-bg);
		border-bottom: 2px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 100;
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--header-height);
	}

	.nav-brand a {
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--color-text);
		text-decoration: none;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.3s ease;
	}

	.nav-brand a:hover {
		color: var(--color-accent-hover);
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 3rem;
		align-items: center;
	}

	.nav-links a {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: color 0.2s ease;
		padding: 0.5rem 0;
		position: relative;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.nav-links a:hover {
		color: var(--color-accent-hover);
	}

	.nav-links a.active {
		color: var(--color-accent);
		font-weight: 700;
	}

	.nav-links a.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--color-border);
		transition: background-color 0.3s ease;
	}

	.theme-toggle-container {
		display: flex;
		align-items: center;
	}

	@media (max-width: 768px) {
		nav {
			padding: 0 1rem;
		}

		.nav-container {
			flex-direction: column;
			height: auto;
			padding: 1rem 0;
		}

		.nav-links {
			margin-top: 1rem;
			gap: 1.5rem;
			flex-wrap: wrap;
			justify-content: center;
			width: 100%;
		}

		.nav-links li {
			flex-shrink: 0;
		}

		.nav-links a {
			font-size: 0.8rem;
			padding: 0.25rem 0.5rem;
		}
	}

	@media (max-width: 480px) {
		nav {
			padding: 0 0.5rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.nav-links a {
			font-size: 0.75rem;
		}

		.nav-brand a {
			font-size: 1rem;
		}
	}
</style>
