import type { Actions } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, RECIPIENT_EMAIL } from '$env/static/private';

// Initialize Resend with your API key
const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name') as string;
			const email = data.get('email') as string;
			const subject = data.get('subject') as string;
			const message = data.get('message') as string;

			// Basic validation
			if (!name || !email || !subject || !message) {
				return {
					success: false,
					message: 'Please fill in all fields.'
				};
			}

			// Email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return {
					success: false,
					message: 'Please enter a valid email address.'
				};
			}

			// Email content
			const subjectMap: Record<string, string> = {
				music: 'Music Collaboration',
				circuits: 'Circuit Design',
				coding: 'Software Development',
				general: 'General Inquiry'
			};

			const emailSubject = `Portfolio Contact: ${subjectMap[subject] || subject}`;

			const emailContent = `
				New contact form submission from your portfolio website:
				
				Name: ${name}
				Email: ${email}
				Subject: ${subjectMap[subject] || subject}
				
				Message:
				${message}
				
				---
				Sent from your portfolio contact form
			`;

			// Send email using Resend
			const response = await resend.emails.send({
				from: 'Portfolio Contact Form <noreply@aubinvanns.com>',
				to: [RECIPIENT_EMAIL],
				subject: emailSubject,
				text: emailContent,
				replyTo: email // This allows you to reply directly to the sender
			});

			if (response.error) {
				console.error('Email sending error:', response.error);
				return {
					success: false,
					message: 'Sorry, there was an error sending your message. Please try again later.'
				};
			}

			console.log('Email sent successfully', response.data);

			return {
				success: true,
				message: "Thank you for your message! I'll get back to you soon."
			};
		} catch (error) {
			console.error('Email sending error:', error);

			return {
				success: false,
				message: 'Sorry, there was an error sending your message. Please try again later.'
			};
		}
	}
};
