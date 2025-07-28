import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Dku-8waL.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DiZkr1to.js","_app/immutable/chunks/vrnyIlsy.js","_app/immutable/chunks/BW_bmEDz.js","_app/immutable/chunks/K2dVyUTn.js","_app/immutable/chunks/n2oPLwtK.js","_app/immutable/chunks/CJz8MGqf.js","_app/immutable/chunks/CulxppJ2.js","_app/immutable/chunks/Dd4ufzC7.js"];
export const stylesheets = ["_app/immutable/assets/5.yeGN9jlM.css"];
export const fonts = [];
