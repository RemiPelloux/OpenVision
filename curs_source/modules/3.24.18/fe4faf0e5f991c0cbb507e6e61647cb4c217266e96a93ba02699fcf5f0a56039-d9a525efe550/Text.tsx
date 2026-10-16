import { Zr, rd } from "./cn.ts";
import { Y$e } from "./index_5.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { xJn } from "./text.stylex.ts";
import { c as aui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as cui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as oui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as sui } from "./react-runtime/react/esm-jsx-runtime-production.js";
function go(r) {
    const e = aui(46);
    let a, s, l, u, p, m, b, g, _, v, x, C, E;
    e[0] !== r ? ({ as: _, variant: v, size: x, weight: C, color: l, truncate: E, numeric: u, children: a, rootStyle: b, className: s, style: g, ref: m, ...p } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p, e[6] = m, e[7] = b, e[8] = g, e[9] = _, e[10] = v, e[11] = x, e[12] = C, e[13] = E) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5], m = e[6], b = e[7], g = e[8], _ = e[9], v = e[10], x = e[11], C = e[12], E = e[13]);
    const A = _ === void 0 ? "span" : _, $ = v === void 0 ? "default" : v, I = x === void 0 ? "md" : x, N = C === void 0 ? "regular" : C, R = E === !0 ? "end" : E === !1 ? void 0 : E ?? void 0;
    let P, L, j, z;
    if (e[14] !== A || e[15] !== s || e[16] !== l || e[17] !== m || e[18] !== b || e[19] !== I || e[20] !== R || e[21] !== $ || e[22] !== N) {
        const { className: H, style: Z } = wn(xJn({
            color: l,
            size: I,
            truncate: R,
            variant: $,
            weight: N
        }), b);
        L = Z, P = A, j = m, z = Zr("ui-text", H, s), e[14] = A, e[15] = s, e[16] = l, e[17] = m, e[18] = b, e[19] = I, e[20] = R, e[21] = $, e[22] = N, e[23] = P, e[24] = L, e[25] = j, e[26] = z;
    } else P = e[23], L = e[24], j = e[25], z = e[26];
    let q;
    e[27] !== g || e[28] !== L ? (q = {
        ...L,
        ...g
    }, e[27] = g, e[28] = L, e[29] = q) : q = e[29];
    const O = u || void 0;
    let B;
    e[30] !== a || e[31] !== R ? (B = R === "start" ? cui(oui, {
        children: [
            "\u2066",
            a,
            "\u2069"
        ]
    }) : a, e[30] = a, e[31] = R, e[32] = B) : B = e[32];
    let V;
    return e[33] !== P || e[34] !== l || e[35] !== p || e[36] !== I || e[37] !== j || e[38] !== z || e[39] !== q || e[40] !== O || e[41] !== B || e[42] !== R || e[43] !== $ || e[44] !== N ? (V = sui(P, {
        ref: j,
        className: z,
        style: q,
        "data-variant": $,
        "data-size": I,
        "data-weight": N,
        "data-color": l,
        "data-truncate": R,
        "data-numeric": O,
        ...p,
        children: B
    }), e[33] = P, e[34] = l, e[35] = p, e[36] = I, e[37] = j, e[38] = z, e[39] = q, e[40] = O, e[41] = B, e[42] = R, e[43] = $, e[44] = N, e[45] = V) : V = e[45], V;
}
export { go };
var __wakaru_LY_initialized = false;
export function LY() {
if (__wakaru_LY_initialized) return;
__wakaru_LY_initialized = true;
"use strict";
Ho(), Y$e(), rd(), i(go, "Text");

}
