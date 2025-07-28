<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="nav-container">
			<div class="nav-brand">
				<a href="/">AUBIN VANNS</a>
			</div>
			<ul class="nav-links">
				<li>
					<a href="/" class={$page.url.pathname === '/' ? 'active' : ''}>
						HOME
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
					<a href="/coding" class={$page.url.pathname.startsWith('/coding') ? 'active' : ''}>
						CODING
					</a>
				</li>
				<li>
					<a href="/contact" class={$page.url.pathname.startsWith('/contact') ? 'active' : ''}>
						CONTACT
					</a>
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
	}

	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			height: auto;
			padding: 1rem 0;
		}

		.nav-links {
			margin-top: 1rem;
			gap: 2rem;
		}
	}
</style>
