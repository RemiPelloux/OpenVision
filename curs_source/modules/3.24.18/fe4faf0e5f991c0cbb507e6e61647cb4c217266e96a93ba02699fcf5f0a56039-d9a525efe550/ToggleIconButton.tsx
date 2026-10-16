import { f$t, h$t, m$t, p$t, ttr } from "./IconButton.chrome.ts";
import { DLt } from "./Toggle.mjs";
import { Zr, rd } from "./cn.ts";
import { Mn } from "./icon.tsx";
import { kw } from "./index_3.ts";
import { Ra } from "./index_4.ts";
import { V4i } from "./index_5.mjs";
import { i } from "./plugin-brand-icon.js";
import { oP } from "./variant-enforcer.tsx";
import { jsxs as Ndi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lHn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as xz } from "./react-runtime/react/esm-jsx-runtime-production.js";
function FLt(r, e, a, s) {
    return typeof r == "string" ? xz(Mn, {
        "aria-hidden": "true",
        name: r,
        rootStyle: s,
        size: a,
        variant: e
    }) : xz("span", {
        ...p$t(a),
        "aria-hidden": "true",
        children: r
    });
}
function L0r(r) {
    const e = lHn(19), { icon: a, pressedIcon: s, pressed: l, iconVariant: u, iconSize: p, iconStyle: m } = r, b = !l || void 0;
    let g;
    e[0] !== a || e[1] !== p || e[2] !== m || e[3] !== u ? (g = FLt(a, u, p, m), e[0] = a, e[1] = p, e[2] = m, e[3] = u, e[4] = g) : g = e[4];
    let _;
    e[5] !== b || e[6] !== g ? (_ = xz("span", {
        className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr",
        "data-swap-active": b,
        children: g
    }), e[5] = b, e[6] = g, e[7] = _) : _ = e[7];
    const v = l || void 0;
    let x;
    e[8] !== p || e[9] !== m || e[10] !== u || e[11] !== s ? (x = FLt(s, u, p, m), e[8] = p, e[9] = m, e[10] = u, e[11] = s, e[12] = x) : x = e[12];
    let C;
    e[13] !== v || e[14] !== x ? (C = xz("span", {
        className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr",
        "data-swap-active": v,
        children: x
    }), e[13] = v, e[14] = x, e[15] = C) : C = e[15];
    let E;
    return e[16] !== _ || e[17] !== C ? (E = Ndi("span", {
        className: "ui-rvj5dj ui-6s0dn4 ui-1o2pa38 ui-c8icb0 ui-47corl ui-1heor9g",
        "aria-hidden": "true",
        children: [
            _,
            C
        ]
    }), e[16] = _, e[17] = C, e[18] = E) : E = e[18], E;
}
function oRe(r) {
    const e = lHn(52);
    let a, s, l, u, p, m, b, g, _, v, x, C, E, A, $;
    e[0] !== r ? ({ icon: u, pressedIcon: v, iconVariant: x, variant: $, rounded: g, frame: C, size: _, iconSize: p, tone: A, rootStyle: b, iconStyle: m, disabled: l, "aria-label": a, "aria-labelledby": s, ...E } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p, e[6] = m, e[7] = b, e[8] = g, e[9] = _, e[10] = v, e[11] = x, e[12] = C, e[13] = E, e[14] = A, e[15] = $) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5], m = e[6], b = e[7], g = e[8], _ = e[9], v = e[10], x = e[11], C = e[12], E = e[13], A = e[14], $ = e[15]);
    const I = v === void 0 ? u : v, N = x === void 0 ? "outline" : x, R = C === void 0 ? "container" : C, P = oP();
    let L, j, z, q, O, B;
    if (e[16] !== a || e[17] !== s || e[18] !== l || e[19] !== P || e[20] !== R || e[21] !== u || e[22] !== p || e[23] !== b || e[24] !== g || e[25] !== _ || e[26] !== E || e[27] !== A || e[28] !== $) {
        const { size: Z, innerIconSize: K, disabled: Y, variant: J, tone: re } = h$t({
            disabled: l,
            enforced: P,
            iconSize: p,
            size: _,
            tone: A,
            variant: $
        });
        z = K, j = Y, m$t("ToggleIconButton", u, J, a, s), q = f$t({
            enforcedRootStyle: P?.iconButtonRootStyle,
            frame: R,
            rootStyle: b,
            rounded: g,
            size: Z,
            tone: re,
            variant: J
        }), L = DLt, O = E, B = Zr("ui-icon-button", q.rootAttrs.className), e[16] = a, e[17] = s, e[18] = l, e[19] = P, e[20] = R, e[21] = u, e[22] = p, e[23] = b, e[24] = g, e[25] = _, e[26] = E, e[27] = A, e[28] = $, e[29] = L, e[30] = j, e[31] = z, e[32] = q, e[33] = O, e[34] = B;
    } else L = e[29], j = e[30], z = e[31], q = e[32], O = e[33], B = e[34];
    let V;
    e[35] !== P?.iconButtonIconStyle || e[36] !== u || e[37] !== m || e[38] !== N || e[39] !== z || e[40] !== I ? (V = i((Z, K)=>xz("button", {
            ...Z,
            "data-pressed": void 0,
            children: xz(L0r, {
                icon: u,
                iconSize: z,
                iconStyle: [
                    P?.iconButtonIconStyle,
                    m
                ],
                iconVariant: N,
                pressed: K.pressed,
                pressedIcon: I
            })
        }), "t6"), e[35] = P?.iconButtonIconStyle, e[36] = u, e[37] = m, e[38] = N, e[39] = z, e[40] = I, e[41] = V) : V = e[41];
    let H;
    return e[42] !== L || e[43] !== a || e[44] !== s || e[45] !== j || e[46] !== q.dataAttrs || e[47] !== q.rootAttrs.style || e[48] !== O || e[49] !== B || e[50] !== V ? (H = xz(L, {
        ...O,
        className: B,
        style: q.rootAttrs.style,
        ...q.dataAttrs,
        "aria-label": a,
        "aria-labelledby": s,
        "data-component": "toggle-icon-button",
        disabled: j,
        render: V
    }), e[42] = L, e[43] = a, e[44] = s, e[45] = j, e[46] = q.dataAttrs, e[47] = q.rootAttrs.style, e[48] = O, e[49] = B, e[50] = V, e[51] = H) : H = e[51], H;
}
export { FLt, L0r, oRe };
var __wakaru_OLt_initialized = false;
export function OLt() {
if (__wakaru_OLt_initialized) return;
__wakaru_OLt_initialized = true;
"use strict";
V4i(), rd(), Ra(), ttr(), kw(), i(FLt, "renderGlyph"), i(L0r, "ToggleIconSwap"), i(oRe, "ToggleIconButton");

}
