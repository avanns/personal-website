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
				<a href="https://aubinvanns.bandcamp.com" target="_blank">BANDCAMP</a>
				<a href="/contact">CONTACT</a>
			</div>
			<p>&copy; 2024 AUBIN VANNS. ALL RIGHTS RESERVED.</p>
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
		border-top: 2px solid var(--color-border);
		padding: 2rem 0;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		text-align: center;
	}

	.footer-links {
		margin-bottom: 1rem;
	}

	.footer-links a {
		margin: 0 1rem;
		font-weight: 600;
		color: var(--color-text);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.9rem;
	}

	.footer-links a:hover {
		color: var(--color-accent-hover);
	}

	footer p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		font-weight: 400;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}
</style>
