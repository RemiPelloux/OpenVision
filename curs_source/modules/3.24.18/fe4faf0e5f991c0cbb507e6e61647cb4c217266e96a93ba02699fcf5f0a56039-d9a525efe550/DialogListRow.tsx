import { bC, brr, grr, hrr, wrr, yrr } from "./Dialog.stylex.ts";
import { Orr, zrr } from "./DialogListContext.tsx";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { jsx as bz } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as ddi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as pdi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as udi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Urr(r) {
    const e = udi(33), { icon: a, label: s, trailing: l, selected: u, multiline: p, onClick: m, disabled: b } = r, g = u === void 0 ? !1 : u, _ = p === void 0 ? !1 : p, { selectable: v } = Orr(), x = v && m !== void 0;
    let C;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (C = wn(hrr()), e[0] = C) : C = e[0];
    const E = C;
    let A;
    e[1] !== b || e[2] !== _ || e[3] !== m || e[4] !== g ? (A = $e({
        rootClass: "ui-dialog-list-row",
        stylexStyles: grr({
            disabled: b === !0,
            interactive: m !== void 0,
            multiline: _,
            selected: g
        })
    }), e[1] = b, e[2] = _, e[3] = m, e[4] = g, e[5] = A) : A = e[5];
    const $ = A;
    let I;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (I = wn(brr()), e[6] = I) : I = e[6];
    const N = I;
    let R;
    e[7] !== _ ? (R = wn(yrr({
        multiline: _
    })), e[7] = _, e[8] = R) : R = e[8];
    const P = R;
    let L;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (L = wn(wrr()), e[9] = L) : L = e[9];
    const j = L;
    let z;
    e[10] !== a ? (z = a ? bz("div", {
        className: N.className,
        style: N.style,
        children: a
    }) : null, e[10] = a, e[11] = z) : z = e[11];
    let q;
    e[12] !== s || e[13] !== P.className || e[14] !== P.style ? (q = bz("div", {
        className: P.className,
        style: P.style,
        children: s
    }), e[12] = s, e[13] = P.className, e[14] = P.style, e[15] = q) : q = e[15];
    let O;
    e[16] !== l ? (O = l ? bz("div", {
        className: j.className,
        style: j.style,
        children: l
    }) : null, e[16] = l, e[17] = O) : O = e[17];
    let B;
    e[18] !== O || e[19] !== z || e[20] !== q ? (B = pdi(ddi, {
        children: [
            z,
            q,
            O
        ]
    }), e[18] = O, e[19] = z, e[20] = q, e[21] = B) : B = e[21];
    const V = B;
    let H;
    e[22] !== b || e[23] !== x || e[24] !== m || e[25] !== $.className || e[26] !== $.style || e[27] !== V || e[28] !== g ? (H = m !== void 0 ? x ? bz("button", {
        "aria-selected": g,
        className: $.className,
        disabled: b,
        onClick: m,
        role: "option",
        style: $.style,
        type: "button",
        children: V
    }) : bz("button", {
        className: $.className,
        disabled: b,
        onClick: m,
        style: $.style,
        type: "button",
        children: V
    }) : bz("div", {
        className: $.className,
        style: $.style,
        children: V
    }), e[22] = b, e[23] = x, e[24] = m, e[25] = $.className, e[26] = $.style, e[27] = V, e[28] = g, e[29] = H) : H = e[29];
    const Z = H, K = x ? "presentation" : void 0;
    let Y;
    return e[30] !== Z || e[31] !== K ? (Y = bz("li", {
        className: E.className,
        role: K,
        style: E.style,
        children: Z
    }), e[30] = Z, e[31] = K, e[32] = Y) : Y = e[32], Y;
}
export { Urr };
var __wakaru_zki_initialized = false;
export function zki() {
if (__wakaru_zki_initialized) return;
__wakaru_zki_initialized = true;
"use strict";
Ho(), ji(), bC(), zrr(), i(Urr, "DialogListRow");

}
