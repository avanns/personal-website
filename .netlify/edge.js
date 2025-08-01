import { Server } from './server/index.js';
import { manifest } from 'MANIFEST';

const server = new Server(manifest);

/**
 * We don't know the origin until we receive a request, but
 * that's guaranteed to happen before we call `read`
 * @type {string}
 */
let origin;

const initialized = server.init({
	// @ts-ignore
	env: Deno.env.toObject(),
	read: async (file) => {
		const response = await fetch(`${origin}/${file}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
		}
		return response.body;
	}
});

/** @type {import('@netlify/edge-functions').EdgeFunction} */
async function handler(request, context) {
	if (!origin) {
		origin = new URL(request.url).origin;
		await initialized;
	}

	return server.respond(request, {
		platform: { context },
		getClientAddress() {
			return context.ip;
		}
	});
}

export { handler as default };
