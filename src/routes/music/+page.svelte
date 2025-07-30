<script>
	import nightShoot from '$lib/images/music/AUBIN NIGHT SHOOT-1713.jpg';
	import dsc03944 from '$lib/images/music/DSC03944.JPG';
	import s16a6151 from '$lib/images/music/S16A6151.jpg';
</script>

<svelte:head>
	<title>Music - Aubin Vanns</title>
	<meta
		name="description"
		content="Electronic music compositions and performances by Aubin Vanns"
	/>
</svelte:head>

<div class="music-page">
	<div class="page-header">
		<h1>Music</h1>
		<p class="intro">Guitarist, composer and improviser.</p>
	</div>

	<section class="gallery">
		<h2>Projects</h2>
		<div class="image-grid">
			<div class="image-item">
				<img src={nightShoot} alt="Aubin Vanns Quartet" />
				<div class="image-caption">
					<h3>Aubin Vanns Quartet</h3>
					<p>Experimental setup for nocturnal soundscapes</p>
					<a href="https://aubinvanns.bandcamp.com/album/opera" target="_blank" class="btn"
						>Listen on Bandcamp</a
					>
				</div>
			</div>
			<div class="image-item">
				<img src={dsc03944} alt="They Will Flock in concert" />
				<div class="image-caption">
					<h3>They Will Flock</h3>
					<p>
						An eclectic listening experience with a wide tonal palette that oscillates between funk,
						rock and jazz with a contemporary approach to group improvisation.
					</p>
					<a href="https://theywillflock.bandcamp.com/album/the-game" target="_blank" class="btn"
						>Listen on Bandcamp</a
					>
				</div>
			</div>
			<div class="image-item">
				<img src={s16a6151} alt="Blue Ejder CD cover" />
				<div class="image-caption">
					<h3>Blue Ejder</h3>
					<p>Jazz & Swedish folk music - words by Karin Boye</p>
					<a
						href="https://open.spotify.com/album/4S9RqONH0Vlw9eHpNI26t5"
						target="_blank"
						class="btn">Listen on Spotify</a
					>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.music-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.page-header h1 {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.intro {
		font-size: 1.2rem;
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.gallery {
		margin: 4rem 0;
	}

	.gallery h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.image-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.image-item {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease,
			background-color 0.3s ease;
	}

	.image-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		border-color: var(--color-accent);
	}

	.image-item img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		display: block;
	}

	.image-caption {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		transition: background-color 0.3s ease;
	}

	.image-caption h3 {
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
		transition: color 0.3s ease;
	}

	.image-caption p {
		margin: 0 0 1rem 0;
		color: var(--color-text-secondary);
		line-height: 1.6;
		flex: 1;
		transition: color 0.3s ease;
	}

	.image-caption .btn {
		align-self: flex-start;
		margin-top: auto;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.music-info {
		margin-top: 4rem;
	}

	.music-info h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition:
			border-color 0.3s ease,
			background-color 0.3s ease;
	}

	.project-card:hover {
		border-color: var(--color-accent);
		background: var(--color-bg-secondary);
	}

	.project-card h3 {
		margin: 0 0 1rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
		transition: color 0.3s ease;
	}

	.project-card p {
		margin: 0 0 1.5rem 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
		transition: color 0.3s ease;
	}

	.btn {
		display: inline-block;
		background: var(--color-accent);
		color: var(--color-bg);
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition:
			background 0.3s ease,
			color 0.3s ease;
	}

	.btn:hover {
		background: var(--color-accent-hover);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.image-grid {
			grid-template-columns: 1fr;
		}

		.project-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
