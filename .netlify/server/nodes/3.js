import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.Do5QFqDb.js","_app/immutable/chunks/BAEDY87K.js","_app/immutable/chunks/vrnyIlsy.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DiZkr1to.js"];
export const stylesheets = ["_app/immutable/assets/3.BLmegmhq.css"];
export const fonts = [];
