import { MIt, bC } from "./Dialog.stylex.ts";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { jsx as ndi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tdi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Drr(r) {
    const e = tdi(3), { children: a } = r;
    let s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = $e({
        rootClass: "ui-dialog-header-lead",
        stylexStyles: MIt({
            alignment: "start"
        })
    }), e[0] = s) : s = e[0];
    const l = s;
    let u;
    return e[1] !== a ? (u = ndi("div", {
        className: l.className,
        style: l.style,
        children: a
    }), e[1] = a, e[2] = u) : u = e[2], u;
}
export { Drr };
var __wakaru_Dki_initialized = false;
export function Dki() {
if (__wakaru_Dki_initialized) return;
__wakaru_Dki_initialized = true;
"use strict";
ji(), bC(), i(Drr, "DialogHeaderLead");

}
