<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-content">
			<div class="footer-links">
				<a href="https://aubinvanns.bandcamp.com" target="_blank">Bandcamp</a>
				<a href="https://github.com/yourusername" target="_blank">GitHub</a>
				<a href="/contact">Contact</a>
			</div>
			<p>&copy; 2024 Aubin Vanns. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		padding: 2rem 0;
		width: 100%;
	}

	footer {
		background: var(--color-bg-secondary);
		border-top: 1px solid var(--color-border);
		padding: 2rem 0;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	.footer-links {
		margin-bottom: 1rem;
	}

	.footer-links a {
		margin: 0 1rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.footer-links a:hover {
		color: var(--color-accent);
	}

	footer p {
		margin: 0;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
	}
</style>
