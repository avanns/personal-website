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
		display: grid;
		grid-template-areas: "header header header" ". main ." "footer footer footer";
		grid-template-columns: 1rem 1fr 1rem;
		min-height: 100vh;
	}

	main {
		grid-area: main;
		flex: 1;
		display: flex;
		min-height: calc(100vh - var(--header-height) - var(--footer-height));
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}

	footer {
		height: var(--footer-height);
		box-sizing: border-box;
		grid-area: footer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.footer-content {
		text-align: center;
	}

	.footer-links {
		margin-bottom: 0.5rem;
	}

	.footer-links a {
		margin: 0 0.5rem;
		font-weight: bold;
	}

	footer p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.8;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
