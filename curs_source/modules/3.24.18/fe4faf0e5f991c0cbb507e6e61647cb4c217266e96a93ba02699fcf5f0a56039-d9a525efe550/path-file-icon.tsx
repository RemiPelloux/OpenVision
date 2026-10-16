import { r0r, tRe } from "./file-icon-variant-context.tsx";
import { $Lt, f0r } from "./get-file-icon.ts";
import { Mn } from "./icon.tsx";
import { Ra } from "./index_4.ts";
import { T0r } from "./index_8.ts";
import { i } from "./plugin-brand-icon.js";
import { NLt } from "./seti-icons.ts";
import { A0r } from "./seti.tsx";
import { ILt } from "./seti.types.ts";
import { c as $di } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as oHn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function $0r(r) {
    return typeof r == "number" ? R0r[r] ?? r : M0r[r ?? ILt];
}
function I0r(r) {
    const e = /^([\d.]+)em$/i.exec(r.trim());
    return e !== null && Number.parseFloat(e[1]) > 1;
}
function N0r(r, e) {
    const { fontSize: a, ...s } = e ?? {}, u = s["--icon-size"] === "1em" && typeof a == "string" && !I0r(a);
    return {
        ...s,
        ...u ? {
            fontSize: a
        } : {},
        color: NLt(r)
    };
}
function aRe(r) {
    const e = $di(33);
    let a, s, l, u, p;
    e[0] !== r ? ({ name: s, variant: p, size: l, style: u, ...a } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5]);
    const m = tRe();
    let b, g, _, v, x, C, E;
    if (e[6] !== m || e[7] !== a || e[8] !== s || e[9] !== l || e[10] !== u || e[11] !== p) {
        E = Symbol.for("react.early_return_sentinel");
        e: {
            const $ = $Lt({
                filenameOrExt: s,
                preferred: p ?? m
            });
            if ($.variant === "seti") {
                let I;
                e[19] !== a || e[20] !== s || e[21] !== l || e[22] !== u ? (I = oHn(A0r, {
                    ...a,
                    name: s,
                    size: l,
                    style: u
                }), e[19] = a, e[20] = s, e[21] = l, e[22] = u, e[23] = I) : I = e[23], E = I;
                break e;
            }
            b = Mn, g = a, _ = $.iconName, v = $.style, e[24] !== l ? (x = $0r(l), e[24] = l, e[25] = x) : x = e[25], C = N0r($.color, u);
        }
        e[6] = m, e[7] = a, e[8] = s, e[9] = l, e[10] = u, e[11] = p, e[12] = b, e[13] = g, e[14] = _, e[15] = v, e[16] = x, e[17] = C, e[18] = E;
    } else b = e[12], g = e[13], _ = e[14], v = e[15], x = e[16], C = e[17], E = e[18];
    if (E !== Symbol.for("react.early_return_sentinel")) return E;
    let A;
    return e[26] !== b || e[27] !== g || e[28] !== _ || e[29] !== v || e[30] !== x || e[31] !== C ? (A = oHn(b, {
        ...g,
        name: _,
        variant: v,
        size: x,
        style: C
    }), e[26] = b, e[27] = g, e[28] = _, e[29] = v, e[30] = x, e[31] = C, e[32] = A) : A = e[32], A;
}
var M0r, R0r;
export { $0r, I0r, M0r, N0r, R0r, aRe };
var __wakaru_W4i_initialized = false;
export function W4i() {
if (__wakaru_W4i_initialized) return;
__wakaru_W4i_initialized = true;
"use strict";
Ra(), T0r(), r0r(), f0r(), M0r = {
    xs: 10,
    sm: 12,
    base: 12,
    lg: 14,
    xl: 16
}, R0r = {
    18: 10,
    20: 11
}, i($0r, "getCursorIconSize"), i(I0r, "isOversizedEmFontSize"), i(N0r, "getCursorFileIconStyle"), i(aRe, "PathFileIcon");

}
