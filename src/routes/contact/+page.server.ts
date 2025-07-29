import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

// Email configuration - you'll need to set these environment variables
const EMAIL_CONFIG = {
	host: 'smtp.gmail.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_USER, // your Gmail address
		pass: process.env.EMAIL_PASS  // your Gmail app password
	}
};

// Your email address where you want to receive contact form messages
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'your-email@example.com';

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

			// Create transporter
			const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

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

			// Send email
			await transporter.sendMail({
				from: EMAIL_CONFIG.auth.user,
				to: RECIPIENT_EMAIL,
				subject: emailSubject,
				text: emailContent,
				replyTo: email // This allows you to reply directly to the sender
			});

			return {
				success: true,
				message: 'Thank you for your message! I\'ll get back to you soon.'
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