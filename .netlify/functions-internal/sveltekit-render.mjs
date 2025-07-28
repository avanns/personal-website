import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.D-FKt2MR.js",app:"_app/immutable/entry/app.EmvXrzXH.js",imports:["_app/immutable/entry/start.D-FKt2MR.js","_app/immutable/chunks/Dd4ufzC7.js","_app/immutable/chunks/BW_bmEDz.js","_app/immutable/chunks/vrnyIlsy.js","_app/immutable/entry/app.EmvXrzXH.js","_app/immutable/chunks/vrnyIlsy.js","_app/immutable/chunks/BW_bmEDz.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/K2dVyUTn.js","_app/immutable/chunks/n2oPLwtK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
