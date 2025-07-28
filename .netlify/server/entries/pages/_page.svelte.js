import { K as head, E as attr } from "../../chunks/index2.js";
const banner = "/_app/immutable/assets/av-red-title-card.DJEohxOG.jpg";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home</title>`;
    $$payload2.out.push(`<meta name="description" content="Website of musician &amp; developer"/>`);
  });
  $$payload.out.push(`<section class="banner svelte-m957uq"><picture class="svelte-m957uq"><img${attr("src", banner)} alt="banner image" class="svelte-m957uq"/></picture></section>`);
}
export {
  _page as default
};
