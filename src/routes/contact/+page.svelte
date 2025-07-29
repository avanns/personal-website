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
	<div class="page-header">
		<h1>Contact</h1>
		<p class="intro">
			I'm always interested in new collaborations, whether it's music production, 
			circuit design, software development, or creative projects. Let's discuss your ideas!
		</p>
	</div>

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
	</div>
</div>

<style>
	.contact-page {
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

	.success-message {
		background: rgba(76, 175, 80, 0.1);
		border: 1px solid rgba(76, 175, 80, 0.3);
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.success-message h3 {
		margin: 0 0 0.5rem 0;
		color: #4caf50;
	}

	.success-message p {
		margin: 0;
		color: var(--color-text-secondary);
	}

	.contact-content {
		max-width: 600px;
		margin: 0 auto;
		margin-top: 2rem;
	}

	.contact-form h2 {
		margin-bottom: 2rem;
		text-align: center;
		font-size: 1.75rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		background: var(--color-bg);
		color: var(--color-text);
		font-family: inherit;
		font-size: 1rem;
		transition: border-color 0.3s ease;
		box-sizing: border-box;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-accent);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		width: 100%;
		background: var(--color-accent);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.submit-btn:hover {
		background: var(--color-accent-hover);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}
	}
</style> 