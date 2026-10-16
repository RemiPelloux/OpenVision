import { RIt, bC } from "./Dialog.stylex.ts";
import { YY, dfe } from "./DialogContext.tsx";
import { LY, go } from "./Text.tsx";
import { i } from "./plugin-brand-icon.js";
import { jsx as fdi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as mdi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Grr(r) {
    const e = mdi(16);
    let a, s, l, u, p;
    e[0] !== r ? ({ children: a, color: p, rootStyle: l, style: u, ...s } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5]);
    const m = p === void 0 ? "primary" : p, { titleId: b } = dfe("Dialog.Title");
    let g;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (g = RIt(), e[6] = g) : g = e[6];
    let _;
    e[7] !== l ? (_ = [
        g,
        l
    ], e[7] = l, e[8] = _) : _ = e[8];
    let v;
    return e[9] !== a || e[10] !== m || e[11] !== s || e[12] !== u || e[13] !== _ || e[14] !== b ? (v = fdi(go, {
        as: "h2",
        id: b,
        size: "lg",
        color: m,
        ...s,
        rootStyle: _,
        className: "ui-dialog-title",
        style: u,
        children: a
    }), e[9] = a, e[10] = m, e[11] = s, e[12] = u, e[13] = _, e[14] = b, e[15] = v) : v = e[15], v;
}
export { Grr };
var __wakaru_Bki_initialized = false;
export function Bki() {
if (__wakaru_Bki_initialized) return;
__wakaru_Bki_initialized = true;
"use strict";
LY(), bC(), YY(), i(Grr, "DialogTitle");

}
