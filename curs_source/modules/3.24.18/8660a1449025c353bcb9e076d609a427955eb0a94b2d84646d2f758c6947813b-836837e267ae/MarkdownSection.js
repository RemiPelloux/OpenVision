import { S9e } from "./SimpleMarkdown.react.js";
import { Am, cs } from "./Sol.js";
import { Ok, _Me, aS } from "./Ycg.js";
import { mk } from "./gallerySection.js";
import { eD } from "./scrollableDiv.js";
import { IL } from "./simpleButton.js";
import { E } from "./tslib.es6.js";
import { lMn } from "./usePersistentState.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var wYv, CYv, TYv, EYv, IYv, xYv, AYv, l6n, Ren, Edt, c6n, Idt, RYv, PYv;
export { AYv, CYv, EYv, Edt, IYv, Idt, PYv, RYv, Ren, TYv, c6n, l6n, wYv, xYv };
var __wakaru_BlC_initialized = false;
export function BlC() {
if (__wakaru_BlC_initialized) return;
__wakaru_BlC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), Am(), pi(), aS(), S9e(), lMn(), eD(), IL(), mk(), wYv = wt("<div><h3>Plain Text Stream:</h3><pre>"), CYv = wt("<div><h3>Streamed Chunks:"), TYv = wt("<div><div></div><div>"), EYv = wt('<div><div><div><textarea placeholder="Enter your Markdown here"></textarea></div><div></div></div><div><label><input type=checkbox> Use Cached Chunks'), IYv = wt("<div><span>Chunk <!>:</span> <span>"), xYv = Ok(_Me), AYv = `# Hello World

This is a sample markdown document.

## Lists

- Item 1
- Item 2
  - Nested item
- Item 3

1. Numbered item
2. Another numbered item

> This is a blockquote
> With multiple lines

It has raw urls (with and without backticks): \`https://www.google.com\` and https://www.bing.com

And markdown links: [Google](https://www.google.com)`, l6n = cs(!1), Ren = cs(""), Edt = cs(!1), c6n = cs(null), Idt = cs([]), RYv = cs(null, (t, e)=>{
    e(Ren, ""), e(Idt, []), e(Edt, !0);
}), PYv = cs(null, (t, e, n)=>{
    e(Ren, t(Ren) + n), e(Idt, [
        ...t(Idt),
        n
    ]);
});

}
