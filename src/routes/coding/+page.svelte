<script>
	import githubIcon from '$lib/images/github.svg';
	import svelteLogo from '$lib/images/svelte-logo.svg';
</script>

<svelte:head>
    <title>Coding - Aubin Vanns</title>
    <meta name="description" content="Software development and web applications by Aubin Vanns" />
</svelte:head>

<div class="coding-page">
	<div class="page-header">
		<h1>Coding</h1>
		<p class="intro">
			I develop software solutions that bridge the gap between technology and creativity. 
			From web applications to audio processing tools, I create code that serves both 
			functional and artistic purposes.
		</p>
	</div>

	<section class="skills">
		<h2>Technologies & Skills</h2>
		<div class="skills-grid">
			<div class="skill-category">
				<h3>Frontend</h3>
				<ul>
					<li>Svelte & SvelteKit</li>
					<li>React & Next.js</li>
					<li>TypeScript</li>
					<li>CSS & Tailwind</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Backend</h3>
				<ul>
					<li>Node.js</li>
					<li>Python</li>
					<li>PostgreSQL</li>
					<li>REST APIs</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Audio & Music</h3>
				<ul>
					<li>Web Audio API</li>
					<li>Tone.js</li>
					<li>Max/MSP</li>
					<li>Audio Processing</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Tools & Platforms</h3>
				<ul>
					<li>Git & GitHub</li>
					<li>Docker</li>
					<li>AWS</li>
					<li>Netlify</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="projects">
		<h2>Featured Projects</h2>
		<div class="project-grid">
			<div class="project-card">
				<div class="project-header">
					<img src={svelteLogo} alt="Svelte" class="tech-icon" />
					<h3>Portfolio Website</h3>
				</div>
				<p>A modern portfolio built with SvelteKit, featuring responsive design and smooth animations.</p>
				<div class="project-links">
					<a href="https://github.com/yourusername/portfolio" target="_blank" class="github-link">
						<img src={githubIcon} alt="GitHub" />
						View Code
					</a>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>Audio Visualizer</h3>
				</div>
				<p>Real-time audio visualization tool built with Web Audio API and Canvas for live performance integration.</p>
				<div class="project-links">
					<a href="https://github.com/yourusername/audio-visualizer" target="_blank" class="github-link">
						<img src={githubIcon} alt="GitHub" />
						View Code
					</a>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>Circuit Designer</h3>
				</div>
				<p>Interactive web application for designing and simulating electronic circuits with real-time feedback.</p>
				<div class="project-links">
					<a href="https://github.com/yourusername/circuit-designer" target="_blank" class="github-link">
						<img src={githubIcon} alt="GitHub" />
						View Code
					</a>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>Music Production Tool</h3>
				</div>
				<p>Web-based DAW with custom effects and real-time audio processing capabilities.</p>
				<div class="project-links">
					<a href="https://github.com/yourusername/music-tool" target="_blank" class="github-link">
						<img src={githubIcon} alt="GitHub" />
						View Code
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="approach">
		<h2>Development Approach</h2>
		<div class="approach-grid">
			<div class="approach-card">
				<h3>User-Centered Design</h3>
				<p>Every project starts with understanding user needs and creating intuitive, accessible interfaces.</p>
			</div>
			<div class="approach-card">
				<h3>Performance First</h3>
				<p>Optimizing for speed and efficiency, ensuring smooth experiences across all devices.</p>
			</div>
			<div class="approach-card">
				<h3>Creative Solutions</h3>
				<p>Combining technical expertise with artistic vision to create unique digital experiences.</p>
			</div>
		</div>
	</section>

	<section class="contact-section">
		<h2>Let's Work Together</h2>
		<p>Interested in collaborating on a project? I'm always open to new opportunities in web development, 
		audio software, or creative coding projects.</p>
		<a href="/contact" class="cta-button">Get In Touch</a>
	</section>
</div>

<style>
	.coding-page {
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

	.skills {
		margin: 4rem 0;
	}

	.skills h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.skill-category {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.3s ease;
	}

	.skill-category:hover {
		border-color: var(--color-accent);
	}

	.skill-category h3 {
		margin: 0 0 1rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.skill-category ul {
		margin: 0;
		padding-left: 1.2rem;
	}

	.skill-category li {
		margin-bottom: 0.5rem;
		line-height: 1.4;
		color: var(--color-text-secondary);
	}

	.projects {
		margin: 4rem 0;
	}

	.projects h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.project-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.3s ease, box-shadow 0.3s ease;
	}

	.project-card:hover {
		border-color: var(--color-accent);
		box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
	}

	.project-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.tech-icon {
		width: 24px;
		height: 24px;
		margin-right: 0.5rem;
	}

	.project-card h3 {
		margin: 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.project-card p {
		margin: 0 0 1rem 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.github-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-accent);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.github-link img {
		width: 16px;
		height: 16px;
	}

	.github-link:hover {
		color: var(--color-accent-hover);
		text-decoration: none;
	}

	.approach {
		margin: 4rem 0;
	}

	.approach h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
	}

	.approach-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.approach-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.3s ease;
	}

	.approach-card:hover {
		border-color: var(--color-accent);
	}

	.approach-card h3 {
		margin: 0 0 1rem 0;
		color: var(--color-text);
		font-size: 1.25rem;
	}

	.approach-card p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.contact-section {
		text-align: center;
		margin-top: 4rem;
		padding: 3rem;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 12px;
	}

	.contact-section h2 {
		margin-bottom: 1rem;
	}

	.contact-section p {
		margin-bottom: 2rem;
		color: var(--color-text-secondary);
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		background: var(--color-accent);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: background 0.3s ease;
	}

	.cta-button:hover {
		background: var(--color-accent-hover);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}
		
		.project-grid {
			grid-template-columns: 1fr;
		}
		
		.approach-grid {
			grid-template-columns: 1fr;
		}
	}
</style> 