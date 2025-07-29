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
			I specialize in frontend development with extensive experience in React, TypeScript, and the Shopify ecosystem. 
			From custom e-commerce solutions to scalable web applications, I create robust, 
			user-centered experiences that drive business growth.
		</p>
	</div>

	<section class="skills">
		<h2>Technologies & Skills</h2>
		<div class="skills-grid">
			<div class="skill-category">
				<h3>Frontend</h3>
				<ul>
					<li>React & Next.js</li>
					<li>TypeScript</li>
					<li>Zod (Schema Validation)</li>
					<li>Tanstack Query</li>
					<li>GraphQL</li>
					<li>Playwright (Testing)</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Backend</h3>
				<ul>
					<li>PHP</li>
					<li>Laravel</li>
					<li>AWS Services</li>
					<li>Terraform (IaC)</li>
					<li>REST APIs</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Shopify Ecosystem</h3>
				<ul>
					<li>Shopify Theme Development</li>
					<li>Shopify App Development</li>
					<li>Custom Shopify Solutions</li>
					<li>Liquid Templating</li>
					<li>Shopify API Integration</li>
				</ul>
			</div>
			<div class="skill-category">
				<h3>Tools & Platforms</h3>
				<ul>
					<li>Git & GitHub</li>
					<li>Docker</li>
					<li>AWS (EC2, S3, Lambda)</li>
					<li>Netlify</li>
					<li>CI/CD Pipelines</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="projects">
		<h2>Featured Projects</h2>
		<div class="project-grid">
			<div class="project-card">
				<div class="project-header">
					<h3>3rd Party Clothing Rental Widget</h3>
				</div>
				<p>Custom rental widget solution used by major fashion brands including Finisterre, French Connection, and Oh Polly. Built with React and TypeScript for seamless integration across different Shopify stores.</p>
				<div class="project-links">
					<span class="project-status">Live in Production</span>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>UI Component Library</h3>
				</div>
				<p>Shared component library built with React and TypeScript for consistent design patterns across multiple projects. Includes comprehensive documentation and testing suite.</p>
				<div class="project-links">
					<span class="project-status">Internal Tool</span>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>Back in Stock App</h3>
				</div>
				<p>Full-stack Shopify app for managing back-in-stock notifications. Features customer notification system, inventory tracking, and admin dashboard built with React frontend and Laravel backend.</p>
				<div class="project-links">
					<span class="project-status">Live in Production</span>
				</div>
			</div>
			<div class="project-card">
				<div class="project-header">
					<h3>Custom Rental App Solution</h3>
				</div>
				<p>Comprehensive rental management system for Shopify stores. Includes inventory management, booking system, and customer portal with advanced rental period handling.</p>
				<div class="project-links">
					<span class="project-status">Live in Production</span>
				</div>
			</div>
		</div>
	</section>

	<section class="approach">
		<h2>Development Approach</h2>
		<div class="approach-grid">
			<div class="approach-card">
				<h3>Type-Safe Development</h3>
				<p>Leveraging TypeScript and Zod for robust, maintainable code with excellent developer experience.</p>
			</div>
			<div class="approach-card">
				<h3>E-commerce Excellence</h3>
				<p>Deep Shopify expertise from theme customization to custom app development and API integrations.</p>
			</div>
			<div class="approach-card">
				<h3>Scalable Architecture</h3>
				<p>Building with AWS, Terraform, and modern DevOps practices for reliable, scalable solutions.</p>
			</div>
		</div>
	</section>

	<section class="contact-section">
		<h2>Let's Work Together</h2>
		<p>Interested in collaborating on a project? I'm always open to new opportunities in frontend development, 
		Shopify solutions, or e-commerce platform development.</p>
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

	.project-status {
		display: inline-block;
		background: var(--color-accent);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
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