import { K as head } from "../../../chunks/index2.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About</title>`;
    $$payload2.out.push(`<meta name="description" content="Music"/>`);
  });
  $$payload.out.push(`<div class="text-column"><h1>Coming soon</h1></div>`);
}
export {
  _page as default
};
