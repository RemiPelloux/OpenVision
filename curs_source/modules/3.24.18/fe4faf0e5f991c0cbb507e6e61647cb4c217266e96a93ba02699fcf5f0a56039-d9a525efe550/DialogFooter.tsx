import { bC, krr } from "./Dialog.stylex.ts";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { c as Xui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Yui } from "./react-runtime/react/esm-jsx-runtime-production.js";
function M4(r) {
    const e = Xui(15);
    let a, s, l, u, p;
    e[0] !== r ? ({ children: a, className: s, rootStyle: u, style: p, ...l } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5]);
    let m;
    e[6] !== s || e[7] !== u || e[8] !== p ? (m = $e({
        rootClass: "ui-dialog-footer",
        stylexStyles: [
            krr(),
            u
        ],
        className: s,
        style: p
    }), e[6] = s, e[7] = u, e[8] = p, e[9] = m) : m = e[9];
    const b = m;
    let g;
    return e[10] !== b.className || e[11] !== b.style || e[12] !== a || e[13] !== l ? (g = Yui("div", {
        className: b.className,
        style: b.style,
        ...l,
        children: a
    }), e[10] = b.className, e[11] = b.style, e[12] = a, e[13] = l, e[14] = g) : g = e[14], g;
}
export { M4 };
var __wakaru_jrr_initialized = false;
export function jrr() {
if (__wakaru_jrr_initialized) return;
__wakaru_jrr_initialized = true;
"use strict";
ji(), bC(), i(M4, "DialogFooter");

}
