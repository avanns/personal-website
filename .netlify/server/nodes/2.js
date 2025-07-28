import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DbFM80Mq.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DiZkr1to.js","_app/immutable/chunks/vrnyIlsy.js","_app/immutable/chunks/CJz8MGqf.js"];
export const stylesheets = ["_app/immutable/assets/2.3izvbxv8.css"];
export const fonts = [];
