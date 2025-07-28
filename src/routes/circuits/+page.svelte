<script>
	import pedal1 from '$lib/images/pedals/DSC07031.jpeg';
	import pedal2 from '$lib/images/pedals/DSC07040.jpeg';
	import pedal3 from '$lib/images/pedals/DSC07041.jpeg';
	import pedal4 from '$lib/images/pedals/DSC07045.jpeg';
</script>

<svelte:head>
    <title>Circuits - Aubin Vanns</title>
    <meta name="description" content="Custom electronic circuits and audio equipment by Aubin Vanns" />
</svelte:head>

<div class="circuits-page">
	<div class="page-header">
		<h1>Circuits</h1>
		<p class="intro">
			I design and build custom electronic circuits, focusing on audio applications, 
			effects pedals, and experimental sound processing equipment. Each circuit is 
			handcrafted and tested for optimal performance.
		</p>
	</div>

	<section class="pedal-gallery">
		<h2>Custom Effects Pedals</h2>
		<div class="pedal-grid">
			<div class="pedal-item">
				<img src={pedal1} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Distortion Circuit</h3>
					<p>Custom overdrive with variable gain and tone shaping</p>
				</div>
			</div>
			<div class="pedal-item">
				<img src={pedal2} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Delay Module</h3>
					<p>Analog delay with tap tempo and modulation</p>
				</div>
			</div>
			<div class="pedal-item">
				<img src={pedal3} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Filter Circuit</h3>
					<p>Multi-mode filter with envelope following</p>
				</div>
			</div>
			<div class="pedal-item">
				<img src={pedal4} alt="Custom effects pedal" />
				<div class="pedal-info">
					<h3>Modulation Unit</h3>
					<p>Phaser and chorus effects with depth control</p>
				</div>
			</div>
		</div>
	</section>

	<section class="circuit-info">
		<h2>Circuit Design Philosophy</h2>
		<div class="info-grid">
			<div class="info-card">
				<h3>Handcrafted Quality</h3>
				<p>Each circuit is designed and assembled by hand, ensuring attention to detail 
				and quality control throughout the entire process.</p>
			</div>
			<div class="info-card">
				<h3>Custom Solutions</h3>
				<p>Circuits are tailored to specific musical needs, whether for studio recording, 
				live performance, or experimental sound design.</p>
			</div>
			<div class="info-card">
				<h3>Innovation</h3>
				<p>Exploring new circuit topologies and combining digital and analog technologies 
				to create unique sonic possibilities.</p>
			</div>
		</div>
	</section>

	<section class="services">
		<h2>Services</h2>
		<div class="services-grid">
			<div class="service-card">
				<h3>Custom Pedal Design</h3>
				<p>Bespoke effects pedals designed to your specifications, from concept to finished product.</p>
			</div>
			<div class="service-card">
				<h3>Circuit Repair</h3>
				<p>Diagnosis and repair of vintage and modern audio equipment and effects pedals.</p>
			</div>
			<div class="service-card">
				<h3>Modifications</h3>
				<p>Custom modifications to existing equipment to enhance functionality or create new sounds.</p>
			</div>
			<div class="service-card">
				<h3>Consultation</h3>
				<p>Technical consultation for audio projects, circuit design, and equipment selection.</p>
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
		transition: transform 0.3s ease, box-shadow 0.3s ease;
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