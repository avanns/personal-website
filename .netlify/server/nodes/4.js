

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CKdRmeX-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DiZkr1to.js","_app/immutable/chunks/vrnyIlsy.js"];
export const stylesheets = [];
export const fonts = [];
