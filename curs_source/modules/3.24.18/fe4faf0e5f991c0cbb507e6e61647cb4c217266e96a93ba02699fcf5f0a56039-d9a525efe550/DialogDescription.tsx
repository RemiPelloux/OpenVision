import { PIt, bC } from "./Dialog.stylex.ts";
import { YY, dfe } from "./DialogContext.tsx";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { jsx as Kui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vui } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Prr(r) {
    const e = Vui(16);
    let a, s, l, u, p;
    e[0] !== r ? ({ as: p, children: a, style: u, rootStyle: l, ...s } = r, e[0] = r, e[1] = a, e[2] = s, e[3] = l, e[4] = u, e[5] = p) : (a = e[1], s = e[2], l = e[3], u = e[4], p = e[5]);
    const m = p === void 0 ? "p" : p, { descriptionId: b } = dfe("Dialog.Description");
    let g;
    e[6] !== l || e[7] !== u ? (g = $e({
        rootClass: "ui-dialog-description",
        stylexStyles: [
            PIt({
                stepper: !1
            }),
            l
        ],
        style: u
    }), e[6] = l, e[7] = u, e[8] = g) : g = e[8];
    const _ = g;
    let v;
    return e[9] !== m || e[10] !== _.className || e[11] !== _.style || e[12] !== a || e[13] !== b || e[14] !== s ? (v = Kui(m, {
        id: b,
        ...s,
        className: _.className,
        style: _.style,
        children: a
    }), e[9] = m, e[10] = _.className, e[11] = _.style, e[12] = a, e[13] = b, e[14] = s, e[15] = v) : v = e[15], v;
}
export { Prr };
var __wakaru_Lki_initialized = false;
export function Lki() {
if (__wakaru_Lki_initialized) return;
__wakaru_Lki_initialized = true;
"use strict";
ji(), bC(), YY(), i(Prr, "DialogDescription");

}
