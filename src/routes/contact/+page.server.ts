import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('subject');
		const message = data.get('message');

		// Here you would typically send an email or save to a database
		// For now, we'll just log the data
		console.log('Contact form submission:', {
			name,
			email,
			subject,
			message
		});

		// You could integrate with services like:
		// - Email service (SendGrid, Mailgun, etc.)
		// - Database storage
		// - CRM integration
		// - Slack/Discord webhook

		return {
			success: true,
			message: 'Thank you for your message! I\'ll get back to you soon.'
		};
	}
}; 