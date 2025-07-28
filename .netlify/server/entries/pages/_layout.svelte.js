import { D as getContext, E as attr, F as store_get, G as unsubscribe_stores, B as pop, z as push, I as slot } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<header class="svelte-1e5tjhn"><nav class="svelte-1e5tjhn"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1e5tjhn"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1e5tjhn"></path></svg> <ul class="svelte-1e5tjhn"><li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "page" : void 0)} class="svelte-1e5tjhn"><a href="/" class="svelte-1e5tjhn">Home</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "page" : void 0)} class="svelte-1e5tjhn"><a href="/about" class="svelte-1e5tjhn">About</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/music") ? "page" : void 0)} class="svelte-1e5tjhn"><a href="/music" class="svelte-1e5tjhn">Music</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1e5tjhn"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1e5tjhn"></path></svg></nav></header>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  $$payload.out.push(`<div class="app svelte-1y3a15c">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="svelte-1y3a15c"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> <footer class="svelte-1y3a15c"><p>visit <a href="https://aubinvanns.bandcamp.com/album/opera" target="_blank" class="svelte-1y3a15c">Bandcamp</a> to hear/buy the music.</p></footer></div>`);
}
export {
  _layout as default
};
