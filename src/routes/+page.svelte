<script>
  import banner from '$lib/images/av-red-title-card.jpg';
</script>

<svelte:head>
    <title>Aubin Vanns - Portfolio</title>
    <meta name="description" content="Musician, Developer & Circuit Designer - Portfolio of Aubin Vanns"/>
</svelte:head>

<section class="hero">
	<picture>
		<img src={banner} alt="Aubin Vanns banner"/>
	</picture>
	<div class="hero-content">
		<h1>Aubin Vanns</h1>
		<p class="tagline">Musician • Developer • Circuit Designer</p>
	</div>
</section>

<section class="intro">
	<div class="text-column">
		<h2>Welcome to my portfolio</h2>
		<p>
			I'm a multidisciplinary creator working at the intersection of music, technology, and electronics. 
			From crafting electronic music to building custom circuits and developing software, I explore the 
			creative possibilities that emerge when these worlds collide.
		</p>
		
		<div class="portfolio-grid">
			<a href="/music" class="portfolio-card">
				<h3>Music</h3>
				<p>Electronic compositions and live performances</p>
			</a>
			<a href="/circuits" class="portfolio-card">
				<h3>Circuits</h3>
				<p>Custom electronic circuits and audio equipment</p>
			</a>
			<a href="/coding" class="portfolio-card">
				<h3>Coding</h3>
				<p>Software development and web applications</p>
			</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 60vh;
		overflow: hidden;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.hero picture {
		width: 100%;
		height: 100%;
	}

	.hero img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
		color: white;
		padding: 2rem;
		text-align: center;
	}

	.hero-content h1 {
		margin: 0 0 0.5rem 0;
		font-size: 3rem;
		font-weight: bold;
	}

	.tagline {
		font-size: 1.2rem;
		margin: 0;
		opacity: 0.9;
	}

	.intro {
		margin-top: 2rem;
	}

	.intro h2 {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 2rem;
	}

	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.portfolio-card {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.portfolio-card:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		text-decoration: none;
	}

	.portfolio-card h3 {
		margin: 0 0 0.5rem 0;
		color: var(--color-theme-1);
		font-size: 1.3rem;
	}

	.portfolio-card p {
		margin: 0;
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2rem;
		}
		
		.tagline {
			font-size: 1rem;
		}
		
		.portfolio-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
