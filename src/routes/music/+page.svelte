<script>
	import albumLaunch from '$lib/images/music/Aubin Album Launch Vortex-5492.jpg';
	import nightShoot from '$lib/images/music/AUBIN NIGHT SHOOT-1713.jpg';
	import dsc02791 from '$lib/images/music/DSC02791.jpg';
	import dsc03934 from '$lib/images/music/DSC03934.JPG';
	import dsc03944 from '$lib/images/music/DSC03944.JPG';
	import s16a6151 from '$lib/images/music/S16A6151.jpg';
</script>

<svelte:head>
    <title>Music - Aubin Vanns</title>
    <meta name="description" content="Electronic music compositions and performances by Aubin Vanns" />
</svelte:head>

<div class="music-page">
	<div class="text-column">
		<h1>Music</h1>
		<p class="intro">
			I create electronic music that explores the boundaries between digital and analog sound. 
			My work spans from ambient compositions to experimental electronic performances, 
			often incorporating custom-built circuits and software.
		</p>

		<section class="gallery">
			<h2>Performances & Projects</h2>
			<div class="image-grid">
				<div class="image-item">
					<img src={albumLaunch} alt="Album launch performance" />
					<div class="image-caption">
						<h3>Album Launch</h3>
						<p>Live performance at the album launch event</p>
					</div>
				</div>
				<div class="image-item">
					<img src={nightShoot} alt="Night performance setup" />
					<div class="image-caption">
						<h3>Night Performance</h3>
						<p>Experimental setup for nocturnal soundscapes</p>
					</div>
				</div>
				<div class="image-item">
					<img src={dsc02791} alt="Studio session" />
					<div class="image-caption">
						<h3>Studio Session</h3>
						<p>Recording and production work</p>
					</div>
				</div>
				<div class="image-item">
					<img src={dsc03934} alt="Live performance" />
					<div class="image-caption">
						<h3>Live Performance</h3>
						<p>Interactive electronic music performance</p>
					</div>
				</div>
				<div class="image-item">
					<img src={dsc03944} alt="Equipment setup" />
					<div class="image-caption">
						<h3>Equipment Setup</h3>
						<p>Custom gear and circuit integration</p>
					</div>
				</div>
				<div class="image-item">
					<img src={s16a6151} alt="Performance art" />
					<div class="image-caption">
						<h3>Performance Art</h3>
						<p>Multimedia performance combining sound and visuals</p>
					</div>
				</div>
			</div>
		</section>

		<section class="music-info">
			<h2>Current Projects</h2>
			<div class="project-grid">
				<div class="project-card">
					<h3>Electronic Compositions</h3>
					<p>Original electronic music exploring themes of technology, nature, and human experience. 
					Available on Bandcamp and streaming platforms.</p>
					<a href="https://aubinvanns.bandcamp.com/album/opera" target="_blank" class="btn">Listen on Bandcamp</a>
				</div>
				<div class="project-card">
					<h3>Live Performances</h3>
					<p>Interactive electronic performances featuring custom-built circuits, 
					software instruments, and real-time sound manipulation.</p>
				</div>
				<div class="project-card">
					<h3>Sound Design</h3>
					<p>Custom sound design for multimedia projects, installations, 
					and experimental audio-visual experiences.</p>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.music-page {
		width: 100%;
	}

	.intro {
		text-align: center;
		font-size: 1.1rem;
		margin-bottom: 3rem;
		opacity: 0.9;
	}

	.gallery {
		margin: 3rem 0;
	}

	.gallery h2 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.image-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.image-item {
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.image-item:hover {
		transform: translateY(-4px);
	}

	.image-item img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		display: block;
	}

	.image-caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
		color: white;
		padding: 1.5rem;
	}

	.image-caption h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
	}

	.image-caption p {
		margin: 0;
		opacity: 0.9;
		font-size: 0.9rem;
	}

	.music-info {
		margin-top: 3rem;
	}

	.music-info h2 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.project-card h3 {
		margin: 0 0 1rem 0;
		color: var(--color-theme-1);
		font-size: 1.2rem;
	}

	.project-card p {
		margin: 0 0 1rem 0;
		line-height: 1.6;
	}

	.btn {
		display: inline-block;
		background: var(--color-theme-1);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: bold;
		transition: background 0.3s ease;
	}

	.btn:hover {
		background: #e03500;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.image-grid {
			grid-template-columns: 1fr;
		}
		
		.project-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
