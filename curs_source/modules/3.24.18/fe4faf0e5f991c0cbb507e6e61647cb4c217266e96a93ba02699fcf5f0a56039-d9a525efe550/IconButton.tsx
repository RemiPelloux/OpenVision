import { Dme } from "./Button.mjs";
import { f$t, h$t, m$t, p$t, ttr } from "./IconButton.chrome.ts";
import { Zer, yki } from "./IndicatorDot.tsx";
import { Zr, rd } from "./cn.ts";
import { Mn } from "./icon.tsx";
import { o$t } from "./index_3.mjs";
import { kw } from "./index_3.ts";
import { Ra } from "./index_4.ts";
import { i } from "./plugin-brand-icon.js";
import { oP } from "./variant-enforcer.tsx";
import { jsxs as Mui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Nui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as o8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
function jb(r) {
    const e = Nui(60);
    let a, s, l, u, p, m, b, g, _, v, x, C, E, A, $, I, N, R;
    e[0] !== r ? ({ icon: m, iconVariant: E, variant: R, rounded: v, frame: A, size: x, iconSize: b, tone: N, className: u, style: C, rootStyle: _, iconStyle: g, disabled: p, indicatorDot: $, indicatorDotColor: I, "aria-label": a, "aria-labelledby": s, ...l } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p, e[6] = m, e[7] = b, e[8] = g, e[9] = _, e[10] = v, e[11] = x, e[12] = C, e[13] = E, e[14] = A, e[15] = $, e[16] = I, e[17] = N, e[18] = R) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5], m = e[6], b = e[7], g = e[8], _ = e[9], v = e[10], x = e[11], C = e[12], E = e[13], A = e[14], $ = e[15], I = e[16], N = e[17], R = e[18]);
    const P = E === void 0 ? "outline" : E, L = A === void 0 ? "container" : A, j = $ === void 0 ? !1 : $, z = I === void 0 ? "blue" : I, q = oP();
    let O, B, V, H, Z, K, Y, J, re;
    if (e[19] !== a || e[20] !== s || e[21] !== l || e[22] !== u || e[23] !== p || e[24] !== q || e[25] !== L || e[26] !== m || e[27] !== b || e[28] !== g || e[29] !== P || e[30] !== j || e[31] !== _ || e[32] !== v || e[33] !== x || e[34] !== C || e[35] !== N || e[36] !== R) {
        const { size: W, innerIconSize: oe, disabled: ce, variant: Q, tone: le } = h$t({
            disabled: p,
            enforced: q,
            iconSize: b,
            size: x,
            tone: N,
            variant: R
        });
        m$t("IconButton", m, Q, a, s);
        const he = f$t({
            enforcedRootStyle: q?.iconButtonRootStyle,
            frame: L,
            indicatorDot: j,
            rootStyle: _,
            rounded: v,
            size: W,
            tone: le,
            variant: Q
        });
        O = Dme, Z = l, K = Zr("ui-icon-button", he.rootAttrs.className, u), Y = {
            ...he.rootAttrs.style,
            ...C
        }, J = he.dataAttrs, re = ce, B = a, V = s, H = typeof m == "string" ? o8t(Mn, {
            name: m,
            rootStyle: [
                q?.iconButtonIconStyle,
                g
            ],
            variant: P,
            size: oe,
            "aria-hidden": "true"
        }) : o8t("span", {
            ...p$t(oe),
            "aria-hidden": "true",
            children: m
        }), e[19] = a, e[20] = s, e[21] = l, e[22] = u, e[23] = p, e[24] = q, e[25] = L, e[26] = m, e[27] = b, e[28] = g, e[29] = P, e[30] = j, e[31] = _, e[32] = v, e[33] = x, e[34] = C, e[35] = N, e[36] = R, e[37] = O, e[38] = B, e[39] = V, e[40] = H, e[41] = Z, e[42] = K, e[43] = Y, e[44] = J, e[45] = re;
    } else O = e[37], B = e[38], V = e[39], H = e[40], Z = e[41], K = e[42], Y = e[43], J = e[44], re = e[45];
    let ne;
    e[46] !== j || e[47] !== z ? (ne = j ? o8t(Zer, {
        color: z
    }) : null, e[46] = j, e[47] = z, e[48] = ne) : ne = e[48];
    let ae;
    return e[49] !== O || e[50] !== B || e[51] !== V || e[52] !== H || e[53] !== ne || e[54] !== Z || e[55] !== K || e[56] !== Y || e[57] !== J || e[58] !== re ? (ae = Mui(O, {
        ...Z,
        className: K,
        style: Y,
        ...J,
        disabled: re,
        "aria-label": B,
        "aria-labelledby": V,
        children: [
            H,
            ne
        ]
    }), e[49] = O, e[50] = B, e[51] = V, e[52] = H, e[53] = ne, e[54] = Z, e[55] = K, e[56] = Y, e[57] = J, e[58] = re, e[59] = ae) : ae = e[59], ae;
}
export { jb };
var __wakaru_CIe_initialized = false;
export function CIe() {
if (__wakaru_CIe_initialized) return;
__wakaru_CIe_initialized = true;
"use strict";
o$t(), rd(), Ra(), yki(), kw(), ttr(), i(jb, "IconButton");

}
