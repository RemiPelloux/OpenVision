import { E } from "./tslib.es6.js";
var S6i, Hec, lRv, cRv, uRv, dRv;
export { Hec, S6i, cRv, dRv, lRv, uRv };
var __wakaru_hRv_initialized = false;
export function hRv() {
if (__wakaru_hRv_initialized) return;
__wakaru_hRv_initialized = true;
"use strict";
E(), S6i = "data-cursor-design-xray", Hec = [
    "[data-cursor-picker-highlight]",
    "[data-cursor-picker-pill]",
    "[data-cursor-picker-hover-preview]",
    "[data-cursor-picker-multiselect]",
    "[data-cursor-picker-shimmer]",
    "[data-cursor-picker-shimmer-sweep]"
], lRv = Hec.flatMap((t)=>[
        t,
        `${t} *`
    ]).join(", "), cRv = `[${S6i}="true"], [${S6i}="true"] *:not(${lRv}) {
  /* glass-important-ok: guest page CSS we do not own commonly clears outline on focusable elements */
  outline: 1px solid rgb(58 150 221 / 0.72) !important;
  /* glass-important-ok: guest page CSS we do not own can set its own outline-offset */
  outline-offset: -1px !important;
}`, uRv = "div, section, header, main, nav, footer, article, aside, button, img, svg, h1, h2, h3, h4, p, li, ul, ol", dRv = 400;

}
