import { dph, hph, kGy, uph } from "./LYd.js";
import { dy } from "./Text.js";
import { Zci } from "./kbd.js";
import { wGy } from "./tooltip-compound.js";
import { E } from "./tslib.es6.js";
import { isValidElement as GGy } from "./react-runtime/react/esm-index-production.js";
import { Fragment as HGy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Children as WGy } from "./react-runtime/react/esm-index-production.js";
import { jsxs as ZPr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bph } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as rFe } from "./react-runtime/react/esm-jsx-runtime-production.js";
function xs(t) {
    const e = bph(47);
    let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S;
    e[0] !== t ? ({ children: i, content: s, placement: _, offset: d, openDelay: f, closeDelay: r, disabled: a, defaultOpen: o, open: g, "aria-label": n, width: S, minWidth: u, maxWidth: c, sameAxisOnly: b, onOpenChange: h, onOpenChangeComplete: p, ref: l, ...y } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18]);
    let k, C;
    if (e[19] !== i ? (k = WGy.only(i), C = GGy(k), e[19] = i, e[20] = k, e[21] = C) : (k = e[20], C = e[21]), !C) {
        let P;
        return e[22] !== i ? (P = rFe(HGy, {
            children: i
        }), e[22] = i, e[23] = P) : P = e[23], P;
    }
    let T;
    e[24] !== k || e[25] !== l || e[26] !== y ? (T = rFe(dph, {
        ...y,
        ref: l,
        children: k
    }), e[24] = k, e[25] = l, e[26] = y, e[27] = T) : T = e[27];
    let I;
    e[28] !== n || e[29] !== s || e[30] !== c || e[31] !== u || e[32] !== S ? (I = rFe(hph, {
        ariaLabel: n,
        content: s,
        maxWidth: c,
        minWidth: u,
        width: S
    }), e[28] = n, e[29] = s, e[30] = c, e[31] = u, e[32] = S, e[33] = I) : I = e[33];
    let A;
    return e[34] !== r || e[35] !== o || e[36] !== a || e[37] !== d || e[38] !== h || e[39] !== p || e[40] !== g || e[41] !== f || e[42] !== _ || e[43] !== b || e[44] !== T || e[45] !== I ? (A = ZPr(uph, {
        closeDelay: r,
        defaultOpen: o,
        disabled: a,
        offset: d,
        onOpenChange: h,
        onOpenChangeComplete: p,
        open: g,
        openDelay: f,
        placement: _,
        sameAxisOnly: b,
        children: [
            T,
            I
        ]
    }), e[34] = r, e[35] = o, e[36] = a, e[37] = d, e[38] = h, e[39] = p, e[40] = g, e[41] = f, e[42] = _, e[43] = b, e[44] = T, e[45] = I, e[46] = A) : A = e[46], A;
}
export { xs };
var __wakaru_hL_initialized = false;
export function hL() {
if (__wakaru_hL_initialized) return;
__wakaru_hL_initialized = true;
"use strict";
E(), dy(), wGy(), Zci(), (function(t) {
    t.Root = uph, t.Trigger = dph, t.Popup = kGy;
})(xs || (xs = {}));

}
