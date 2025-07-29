<script>
	import pedal1 from '$lib/images/pedals/DSC07031.jpeg';
	import pedal2 from '$lib/images/pedals/DSC07040.jpeg';
	import pedal3 from '$lib/images/pedals/DSC07041.jpeg';
	import pedal4 from '$lib/images/pedals/DSC07045.jpeg';
</script>

<svelte:head>
	<title>Circuits - Aubin Vanns</title>
	<meta
		name="description"
		content="Custom electronic circuits and audio equipment by Aubin Vanns"
	/>
</svelte:head>

<div class="circuits-page">
	<div class="page-header">
		<h1>Circuits</h1>
		<p class="intro">
			I design and build custom guitar effects pedals for personal use, focusing on distortion and
			overdrive circuits. Each pedal has custom designed circuit boards will hand-selected
			components.
		</p>
		<br />
		<p class="intro">I've also fixed and modified a number of pedals.</p>
	</div>

	<section class="pedal-gallery">
		<h2>Custom Effects Pedals</h2>
		<div class="pedal-grid">
			<div class="pedal-item">
				<img src={pedal1} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Fuzz Pedal</h3>
					<p>
						Based on the Depth Charge fuzz pedal. With controls for gain, blend, tone and volume
					</p>
				</div>
			</div>
			<div class="pedal-item">
				<img src={pedal2} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Attention to detail</h3>
					<p>Assembled and soldered by hand, featuring a custom-designed relay-based footswitch</p>
				</div>
			</div>
			<div class="pedal-item">
				<img src={pedal4} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Circuit boards</h3>
					<p>Custom designed, high quality double-sided PCB</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.circuits-page {
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

	.pedal-gallery {
		margin: 4rem 0;
	}

	.pedal-gallery h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.pedal-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.pedal-item {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.pedal-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.pedal-item img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		display: block;
	}

	.pedal-info {
		padding: 1.5rem;
	}

	.pedal-info h3 {
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.pedal-info p {
		margin: 0;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.circuit-info {
		margin: 4rem 0;
	}

	.circuit-info h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.info-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.3s ease;
	}

	.info-card:hover {
		border-color: var(--color-accent);
	}

	.info-card h3 {
		margin: 0 0 1rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.info-card p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.services {
		margin-top: 4rem;
	}

	.services h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.service-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.3s ease;
	}

	.service-card:hover {
		border-color: var(--color-accent);
	}

	.service-card h3 {
		margin: 0 0 1rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.service-card p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.pedal-grid {
			grid-template-columns: 1fr;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
