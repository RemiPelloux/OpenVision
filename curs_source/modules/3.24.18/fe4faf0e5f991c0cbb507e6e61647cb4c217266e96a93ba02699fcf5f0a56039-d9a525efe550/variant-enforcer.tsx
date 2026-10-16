import { i } from "./plugin-brand-icon.js";
import { useContext as VWn } from "./react-runtime/react/esm-index-production.js";
import { c as eui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as nui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as tui } from "./react-runtime/react/esm-index-production.js";
function Y_(r) {
    const e = eui(21), { iconSize: a, iconButtonSize: s, iconButtonVariant: l, iconButtonTone: u, iconButtonRootStyle: p, iconButtonIconStyle: m, iconButtonIconSize: b, buttonSize: g, buttonRootStyle: _, buttonVariant: v, buttonTone: x, buttonPrimaryTone: C, buttonIconSize: E, buttonRounded: A, buttonFullWidth: $, menuSize: I, disabled: N, children: R } = r, P = VWn(W$e), L = a ?? P?.iconSize, j = s ?? P?.iconButtonSize, z = l ?? P?.iconButtonVariant, q = u ?? P?.iconButtonTone, O = p ?? P?.iconButtonRootStyle, B = m ?? P?.iconButtonIconStyle, V = b ?? P?.iconButtonIconSize, H = g ?? P?.buttonSize, Z = _ ?? P?.buttonRootStyle, K = v ?? P?.buttonVariant, Y = x ?? P?.buttonTone, J = C ?? P?.buttonPrimaryTone, re = E ?? P?.buttonIconSize, ne = A ?? P?.buttonRounded, ae = $ ?? P?.buttonFullWidth, W = I ?? P?.menuSize, oe = N ?? P?.disabled;
    let ce;
    e[0] !== L || e[1] !== K || e[2] !== Y || e[3] !== J || e[4] !== re || e[5] !== ne || e[6] !== ae || e[7] !== W || e[8] !== oe || e[9] !== j || e[10] !== z || e[11] !== q || e[12] !== O || e[13] !== B || e[14] !== V || e[15] !== H || e[16] !== Z ? (ce = {
        iconSize: L,
        iconButtonSize: j,
        iconButtonVariant: z,
        iconButtonTone: q,
        iconButtonRootStyle: O,
        iconButtonIconStyle: B,
        iconButtonIconSize: V,
        buttonSize: H,
        buttonRootStyle: Z,
        buttonVariant: K,
        buttonTone: Y,
        buttonPrimaryTone: J,
        buttonIconSize: re,
        buttonRounded: ne,
        buttonFullWidth: ae,
        menuSize: W,
        disabled: oe
    }, e[0] = L, e[1] = K, e[2] = Y, e[3] = J, e[4] = re, e[5] = ne, e[6] = ae, e[7] = W, e[8] = oe, e[9] = j, e[10] = z, e[11] = q, e[12] = O, e[13] = B, e[14] = V, e[15] = H, e[16] = Z, e[17] = ce) : ce = e[17];
    const Q = ce;
    let le;
    return e[18] !== R || e[19] !== Q ? (le = nui(W$e.Provider, {
        value: Q,
        children: R
    }), e[18] = R, e[19] = Q, e[20] = le) : le = e[20], le;
}
function oP() {
    return VWn(W$e);
}
var W$e;
export { W$e, Y_, oP };
var __wakaru_Q_i_initialized = false;
export function Q_i() {
if (__wakaru_Q_i_initialized) return;
__wakaru_Q_i_initialized = true;
"use strict";
W$e = tui(void 0), i(Y_, "VariantEnforcer"), i(oP, "useVariantEnforcer");

}
