import { bC, vrr } from "./Dialog.stylex.ts";
import { YY, dfe } from "./DialogContext.tsx";
import { $e } from "./attach.ts";
import { Mn } from "./icon.tsx";
import { ji } from "./index_2.ts";
import { Ra } from "./index_4.ts";
import { i } from "./plugin-brand-icon.js";
import { c as Wui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as nHn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Mrr(r) {
    const e = Wui(13), { "aria-label": a, iconSize: s, rootStyle: l, onClick: u } = r, p = a === void 0 ? "Close" : a, m = s === void 0 ? 12 : s, { onOpenChange: b } = dfe("Dialog.Close");
    let g;
    e[0] !== u || e[1] !== b ? (g = i(()=>{
        u?.(), b(!1);
    }, "t3"), e[0] = u, e[1] = b, e[2] = g) : g = e[2];
    const _ = g;
    let v;
    e[3] !== l ? (v = $e({
        rootClass: "ui-dialog-close",
        stylexStyles: [
            vrr(),
            l
        ],
        className: "ui-icon-button"
    }), e[3] = l, e[4] = v) : v = e[4];
    const x = v;
    let C;
    e[5] !== m ? (C = nHn(Mn, {
        "aria-hidden": "true",
        name: "close",
        size: m,
        variant: "outline"
    }), e[5] = m, e[6] = C) : C = e[6];
    let E;
    return e[7] !== p || e[8] !== x.className || e[9] !== x.style || e[10] !== _ || e[11] !== C ? (E = nHn("button", {
        type: "button",
        "aria-label": p,
        className: x.className,
        "data-frame": "container",
        "data-size": "md",
        "data-rounded": "true",
        "data-variant": "ghost",
        onClick: _,
        style: x.style,
        children: C
    }), e[7] = p, e[8] = x.className, e[9] = x.style, e[10] = _, e[11] = C, e[12] = E) : E = e[12], E;
}
export { Mrr };
var __wakaru_jki_initialized = false;
export function jki() {
if (__wakaru_jki_initialized) return;
__wakaru_jki_initialized = true;
"use strict";
ji(), Ra(), bC(), YY(), i(Mrr, "DialogClose");

}
