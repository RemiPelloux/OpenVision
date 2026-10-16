import { _rr, bC } from "./Dialog.stylex.ts";
import { YY, dfe } from "./DialogContext.tsx";
import { LY, go } from "./Text.tsx";
import { Zr, rd } from "./cn.ts";
import { i } from "./plugin-brand-icon.js";
import { c as Hui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Zui } from "./react-runtime/react/esm-jsx-runtime-production.js";
function o3(r) {
    const e = Hui(14), { children: a, rootStyle: s, className: l, style: u, scrollable: p } = r, { contentHasCompactTopPadding: m } = dfe("Dialog.Content"), b = p ?? u?.maxHeight !== void 0, g = b && "ui-dialog-content--scrollable";
    let _;
    e[0] !== l || e[1] !== g ? (_ = Zr("ui-dialog-content", g, l), e[0] = l, e[1] = g, e[2] = _) : _ = e[2];
    let v;
    e[3] !== m || e[4] !== b ? (v = _rr({
        afterHeader: m,
        scrollable: b
    }), e[3] = m, e[4] = b, e[5] = v) : v = e[5];
    let x;
    e[6] !== s || e[7] !== v ? (x = [
        v,
        s
    ], e[6] = s, e[7] = v, e[8] = x) : x = e[8];
    let C;
    return e[9] !== a || e[10] !== u || e[11] !== _ || e[12] !== x ? (C = Zui(go, {
        as: "div",
        size: "md",
        weight: "regular",
        color: "primary",
        className: _,
        style: u,
        rootStyle: x,
        children: a
    }), e[9] = a, e[10] = u, e[11] = _, e[12] = x, e[13] = C) : C = e[13], C;
}
export { o3 };
var __wakaru_Rrr_initialized = false;
export function Rrr() {
if (__wakaru_Rrr_initialized) return;
__wakaru_Rrr_initialized = true;
"use strict";
rd(), LY(), bC(), YY(), i(o3, "DialogContent");

}
