<script>
	import { enhance } from '$app/forms';
	import githubIcon from '$lib/images/github.svg';

	export let form;
</script>

<svelte:head>
    <title>Contact - Aubin Vanns</title>
    <meta name="description" content="Get in touch with Aubin Vanns for collaborations and inquiries" />
</svelte:head>

<div class="contact-page">
	<div class="text-column">
		<h1>Contact</h1>
		<p class="intro">
			I'm always interested in new collaborations, whether it's music production, 
			circuit design, software development, or creative projects. Let's discuss your ideas!
		</p>

		{#if form?.success}
			<div class="success-message">
				<h3>Message Sent!</h3>
				<p>{form.message}</p>
			</div>
		{/if}

		<div class="contact-content">
			<section class="contact-form">
				<h2>Send a Message</h2>
				<form method="POST" use:enhance>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" id="name" name="name" required />
					</div>
					
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
					
					<div class="form-group">
						<label for="subject">Subject</label>
						<select id="subject" name="subject" required>
							<option value="">Select a topic</option>
							<option value="music">Music Collaboration</option>
							<option value="circuits">Circuit Design</option>
							<option value="coding">Software Development</option>
							<option value="general">General Inquiry</option>
						</select>
					</div>
					
					<div class="form-group">
						<label for="message">Message</label>
						<textarea id="message" name="message" rows="6" required></textarea>
					</div>
					
					<button type="submit" class="submit-btn">Send Message</button>
				</form>
			</section>

			<section class="contact-info">
				<h2>Get In Touch</h2>
				<div class="info-grid">
					<div class="info-card">
						<h3>Email</h3>
						<p><a href="mailto:hello@aubinvanns.com">hello@aubinvanns.com</a></p>
					</div>
					
					<div class="info-card">
						<h3>Music</h3>
						<p><a href="https://aubinvanns.bandcamp.com" target="_blank">Bandcamp</a></p>
					</div>
					
					<div class="info-card">
						<h3>Code</h3>
						<p>
							<a href="https://github.com/yourusername" target="_blank" class="github-link">
								<img src={githubIcon} alt="GitHub" />
								GitHub
							</a>
						</p>
					</div>
				</div>

				<div class="availability">
					<h3>Availability</h3>
					<p>I'm currently available for:</p>
					<ul>
						<li>Custom circuit design and building</li>
						<li>Web development projects</li>
						<li>Music production and collaboration</li>
						<li>Audio software development</li>
						<li>Creative coding projects</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	.contact-page {
		width: 100%;
	}

	.intro {
		text-align: center;
		font-size: 1.1rem;
		margin-bottom: 3rem;
		opacity: 0.9;
	}

	.success-message {
		background: rgba(76, 175, 80, 0.1);
		border: 1px solid rgba(76, 175, 80, 0.3);
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 2rem;
		text-align: center;
		backdrop-filter: blur(10px);
	}

	.success-message h3 {
		margin: 0 0 0.5rem 0;
		color: #4caf50;
	}

	.success-message p {
		margin: 0;
		opacity: 0.9;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-top: 2rem;
	}

	.contact-form h2,
	.contact-info h2 {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		color: var(--color-text);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.1);
		color: var(--color-text);
		font-family: inherit;
		font-size: 1rem;
		backdrop-filter: blur(10px);
		transition: border-color 0.3s ease;
		box-sizing: border-box;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-theme-1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		width: 100%;
		background: var(--color-theme-1);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.submit-btn:hover {
		background: #e03500;
	}

	.info-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.info-card {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.info-card h3 {
		margin: 0 0 0.5rem 0;
		color: var(--color-theme-1);
		font-size: 1.1rem;
	}

	.info-card p {
		margin: 0;
	}

	.info-card a {
		color: var(--color-theme-1);
		text-decoration: none;
	}

	.info-card a:hover {
		text-decoration: underline;
	}

	.github-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.github-link img {
		width: 16px;
		height: 16px;
	}

	.availability {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.availability h3 {
		margin: 0 0 1rem 0;
		color: var(--color-theme-1);
		font-size: 1.1rem;
	}

	.availability p {
		margin: 0 0 1rem 0;
	}

	.availability ul {
		margin: 0;
		padding-left: 1.2rem;
	}

	.availability li {
		margin-bottom: 0.5rem;
		line-height: 1.4;
	}

	@media (max-width: 768px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style> 