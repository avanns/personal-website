import { M as ensure_array_like, K as head, N as attr_class, J as escape_html, E as attr, O as clsx, P as stringify, Q as bind_props, B as pop, z as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/state.svelte.js";
import { r as readable } from "../../../chunks/index.js";
const get_initial_motion_preference = () => {
  return false;
};
readable(get_initial_motion_preference(), (set) => {
});
function _page($$payload, $$props) {
  push();
  let won, i, submittable;
  let data = $$props["data"];
  let form = $$props["form"];
  let classnames;
  let description;
  won = data.answers.at(-1) === "xxxxx";
  i = won ? -1 : data.answers.length;
  {
    classnames = {};
    description = {};
    data.answers.forEach((answer, i2) => {
      const guess = data.guesses[i2];
      for (let i3 = 0; i3 < 5; i3 += 1) {
        const letter = guess[i3];
        if (answer[i3] === "x") {
          classnames[letter] = "exact";
          description[letter] = "correct";
        } else if (!classnames[letter]) {
          classnames[letter] = answer[i3] === "c" ? "close" : "missing";
          description[letter] = answer[i3] === "c" ? "present" : "absent";
        }
      }
    });
  }
  submittable = data.guesses[i]?.length === 5;
  const each_array = ensure_array_like(
    /**
     * Modify the game state without making a trip to the server,
     * if client-side JavaScript is enabled
     */
    /**
     * Trigger form logic in response to a keydown event, so that
     * desktop users can use the keyboard to play the game
     */
    // prevent default callback from resetting the form
    Array(6)
  );
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Sverdle</title>`;
    $$payload2.out.push(`<meta name="description" content="A Wordle clone written in SvelteKit" class="svelte-1pg2j5l"/>`);
  });
  $$payload.out.push(`<h1 class="visually-hidden svelte-1pg2j5l">Sverdle</h1> <form method="POST" action="?/enter" class="svelte-1pg2j5l"><a class="how-to-play svelte-1pg2j5l" href="/sverdle/how-to-play">How to play</a> <div${attr_class("grid svelte-1pg2j5l", void 0, { "playing": !won, "bad-guess": form?.badGuess })}><!--[-->`);
  for (let row = 0, $$length = each_array.length; row < $$length; row++) {
    each_array[row];
    const current = row === i;
    const each_array_1 = ensure_array_like(Array(5));
    $$payload.out.push(`<h2 class="visually-hidden svelte-1pg2j5l">Row ${escape_html(row + 1)}</h2> <div${attr_class("row svelte-1pg2j5l", void 0, { "current": current })}><!--[-->`);
    for (let column = 0, $$length2 = each_array_1.length; column < $$length2; column++) {
      each_array_1[column];
      const answer = data.answers[row]?.[column];
      const value = data.guesses[row]?.[column] ?? "";
      const selected = current && column === data.guesses[row].length;
      const exact = answer === "x";
      const close = answer === "c";
      const missing = answer === "_";
      $$payload.out.push(`<div${attr_class("letter svelte-1pg2j5l", void 0, {
        "exact": exact,
        "close": close,
        "missing": missing,
        "selected": selected
      })}>${escape_html(value)} <span class="visually-hidden svelte-1pg2j5l">`);
      if (exact) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`(correct)`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (close) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`(present)`);
        } else {
          $$payload.out.push("<!--[!-->");
          if (missing) {
            $$payload.out.push("<!--[-->");
            $$payload.out.push(`(absent)`);
          } else {
            $$payload.out.push("<!--[!-->");
            $$payload.out.push(`empty`);
          }
          $$payload.out.push(`<!--]-->`);
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--></span> <input name="guess"${attr("disabled", !current, true)} type="hidden"${attr("value", value)} class="svelte-1pg2j5l"/></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="controls svelte-1pg2j5l">`);
  if (won || data.answers.length >= 6) {
    $$payload.out.push("<!--[-->");
    if (!won && data.answer) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="svelte-1pg2j5l">the answer was "${escape_html(data.answer)}"</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <button data-key="enter" class="restart selected svelte-1pg2j5l" formaction="?/restart">${escape_html(won ? "you won :)" : `game over :(`)} play again?</button>`);
  } else {
    $$payload.out.push("<!--[!-->");
    const each_array_2 = ensure_array_like(["qwertyuiop", "asdfghjkl", "zxcvbnm"]);
    $$payload.out.push(`<div class="keyboard svelte-1pg2j5l"><button data-key="enter"${attr("disabled", !submittable, true)}${attr_class("svelte-1pg2j5l", void 0, { "selected": submittable })}>enter</button> <button data-key="backspace" formaction="?/update" name="key" value="backspace" class="svelte-1pg2j5l">back</button> <!--[-->`);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let row = each_array_2[$$index_3];
      const each_array_3 = ensure_array_like(row);
      $$payload.out.push(`<div class="row svelte-1pg2j5l"><!--[-->`);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let letter = each_array_3[$$index_2];
        $$payload.out.push(`<button${attr("data-key", letter)}${attr_class(clsx(classnames[letter]), "svelte-1pg2j5l")}${attr("disabled", data.guesses[i].length === 5, true)} formaction="?/update" name="key"${attr("value", letter)}${attr("aria-label", `${stringify(letter)} ${stringify(description[letter] || "")}`)}>${escape_html(letter)}</button>`);
      }
      $$payload.out.push(`<!--]--></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></form> `);
  if (won) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div style="position: absolute; left: 50%; top: 30%" class="svelte-1pg2j5l"></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
