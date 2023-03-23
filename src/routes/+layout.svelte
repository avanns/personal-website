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
		<p>visit <a href="https://aubinvanns.bandcamp.com/album/opera" target="_blank">Bandcamp</a> to hear/buy the music.</p>
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

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
