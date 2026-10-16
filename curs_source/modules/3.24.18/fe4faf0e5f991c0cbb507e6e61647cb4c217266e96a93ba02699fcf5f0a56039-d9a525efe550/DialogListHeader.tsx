import { bC, frr } from "./Dialog.stylex.ts";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { c as cdi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as ldi } from "./react-runtime/react/esm-jsx-runtime-production.js";
function qrr(r) {
    const e = cdi(3), { children: a } = r;
    let s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = $e({
        rootClass: "ui-dialog-list-header",
        stylexStyles: frr()
    }), e[0] = s) : s = e[0];
    const l = s;
    let u;
    return e[1] !== a ? (u = ldi("li", {
        className: l.className,
        style: l.style,
        children: a
    }), e[1] = a, e[2] = u) : u = e[2], u;
}
export { qrr };
var __wakaru_Oki_initialized = false;
export function Oki() {
if (__wakaru_Oki_initialized) return;
__wakaru_Oki_initialized = true;
"use strict";
ji(), bC(), i(qrr, "DialogListHeader");

}
