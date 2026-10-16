import { fC } from "./Text.js";
import { Igs } from "./kbd.js";
import { EOg, Kul, qul, zul } from "./qIc.js";
import { xOg } from "./tooltip-compound.js";
import { x } from "./tslib.es6.js";
import { jsxs as HTi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { isValidElement as KOg } from "./react-runtime/react/esm-index-production.js";
import { jsx as bCe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as qOg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tdl } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Children as zOg } from "./react-runtime/react/esm-index-production.js";
function fp(e) {
    const t = tdl(47);
    let n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E;
    t[0] !== e ? ({ children: i, content: s, placement: b, offset: h, openDelay: v, closeDelay: r, disabled: a, defaultOpen: o, open: f, "aria-label": n, width: E, minWidth: u, maxWidth: l, sameAxisOnly: y, onOpenChange: p, onOpenChangeComplete: g, ref: c, ...T } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = r, t[4] = s, t[5] = o, t[6] = a, t[7] = c, t[8] = l, t[9] = u, t[10] = h, t[11] = p, t[12] = g, t[13] = f, t[14] = v, t[15] = b, t[16] = y, t[17] = T, t[18] = E) : (n = t[1], i = t[2], r = t[3], s = t[4], o = t[5], a = t[6], c = t[7], l = t[8], u = t[9], h = t[10], p = t[11], g = t[12], f = t[13], v = t[14], b = t[15], y = t[16], T = t[17], E = t[18]);
    let A, R;
    if (t[19] !== i ? (A = zOg.only(i), R = KOg(A), t[19] = i, t[20] = A, t[21] = R) : (A = t[20], R = t[21]), !R) {
        let O;
        return t[22] !== i ? (O = bCe(qOg, {
            children: i
        }), t[22] = i, t[23] = O) : O = t[23], O;
    }
    let D;
    t[24] !== A || t[25] !== c || t[26] !== T ? (D = bCe(zul, {
        ...T,
        ref: c,
        children: A
    }), t[24] = A, t[25] = c, t[26] = T, t[27] = D) : D = t[27];
    let P;
    t[28] !== n || t[29] !== s || t[30] !== l || t[31] !== u || t[32] !== E ? (P = bCe(Kul, {
        ariaLabel: n,
        content: s,
        maxWidth: l,
        minWidth: u,
        width: E
    }), t[28] = n, t[29] = s, t[30] = l, t[31] = u, t[32] = E, t[33] = P) : P = t[33];
    let N;
    return t[34] !== r || t[35] !== o || t[36] !== a || t[37] !== h || t[38] !== p || t[39] !== g || t[40] !== f || t[41] !== v || t[42] !== b || t[43] !== y || t[44] !== D || t[45] !== P ? (N = HTi(qul, {
        closeDelay: r,
        defaultOpen: o,
        disabled: a,
        offset: h,
        onOpenChange: p,
        onOpenChangeComplete: g,
        open: f,
        openDelay: v,
        placement: b,
        sameAxisOnly: y,
        children: [
            D,
            P
        ]
    }), t[34] = r, t[35] = o, t[36] = a, t[37] = h, t[38] = p, t[39] = g, t[40] = f, t[41] = v, t[42] = b, t[43] = y, t[44] = D, t[45] = P, t[46] = N) : N = t[46], N;
}
export { fp };
var __wakaru_HO_initialized = false;
export function HO() {
if (__wakaru_HO_initialized) return;
__wakaru_HO_initialized = true;
"use strict";
x(), fC(), xOg(), Igs(), (function(e) {
    e.Root = qul, e.Trigger = zul, e.Popup = EOg;
})(fp || (fp = {}));

}
