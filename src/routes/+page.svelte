<script>
  import banner from '$lib/images/av-red-title-card.jpg';
</script>

<svelte:head>
    <title>Aubin Vanns - Portfolio</title>
    <meta name="description" content="Musician, Developer & Circuit Designer - Portfolio of Aubin Vanns"/>
</svelte:head>

<div class="home-page">
	<section class="hero">
		<div class="hero-content">
			<h1>Aubin Vanns</h1>
			<p class="tagline">Musician • Developer • Circuit Designer</p>
			<p class="description">
				I create at the intersection of music, technology, and electronics. 
				From electronic compositions to custom circuits and software development, 
				I explore the creative possibilities that emerge when these worlds collide.
			</p>
		</div>
		<div class="hero-image">
			<img src={banner} alt="Aubin Vanns" />
		</div>
	</section>

	<section class="work-grid">
		<a href="/music" class="work-card">
			<div class="card-content">
				<h2>Music</h2>
				<p>Electronic compositions and live performances that push the boundaries of sound and technology.</p>
				<span class="card-link">Explore Music →</span>
			</div>
		</a>
		
		<a href="/circuits" class="work-card">
			<div class="card-content">
				<h2>Circuits</h2>
				<p>Custom electronic circuits and audio equipment designed for performance and experimentation.</p>
				<span class="card-link">View Circuits →</span>
			</div>
		</a>
		
		<a href="/coding" class="work-card">
			<div class="card-content">
				<h2>Coding</h2>
				<p>Software development that bridges the gap between technology and creative expression.</p>
				<span class="card-link">See Projects →</span>
			</div>
		</a>
	</section>
</div>

<style>
	.home-page {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		margin: 4rem 0 6rem 0;
		min-height: 60vh;
	}

	.hero-content h1 {
		font-size: 3.5rem;
		font-weight: 800;
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.tagline {
		font-size: 1.25rem;
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
		font-weight: 500;
	}

	.description {
		font-size: 1.1rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
		max-width: 500px;
	}

	.hero-image {
		position: relative;
	}

	.hero-image img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 12px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	.work-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin: 6rem 0;
	}

	.work-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.work-card:hover {
		border-color: var(--color-accent);
		transform: translateY(-4px);
		box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
	}

	.work-card h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.work-card p {
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.card-link {
		color: var(--color-accent);
		font-weight: 600;
		font-size: 0.95rem;
	}

	.work-card:hover .card-link {
		color: var(--color-accent-hover);
	}

	@media (max-width: 768px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 2rem;
			margin: 2rem 0 4rem 0;
		}

		.hero-content h1 {
			font-size: 2.5rem;
		}

		.work-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.work-card {
			padding: 1.5rem;
		}
	}
</style>
