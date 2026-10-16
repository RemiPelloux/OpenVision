import { i } from "./plugin-brand-icon.js";
import { useContext as adi } from "./react-runtime/react/esm-index-production.js";
import { createContext as idi } from "./react-runtime/react/esm-index-production.js";
import { jsx as odi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rdi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Frr(r) {
    const e = rdi(5), { selectable: a, children: s } = r;
    let l;
    e[0] !== a ? (l = {
        selectable: a
    }, e[0] = a, e[1] = l) : l = e[1];
    let u;
    return e[2] !== s || e[3] !== l ? (u = odi(FIt.Provider, {
        value: l,
        children: s
    }), e[2] = s, e[3] = l, e[4] = u) : u = e[4], u;
}
function Orr() {
    return adi(FIt);
}
var FIt;
export { FIt, Frr, Orr };
var __wakaru_zrr_initialized = false;
export function zrr() {
if (__wakaru_zrr_initialized) return;
__wakaru_zrr_initialized = true;
"use strict";
FIt = idi({
    selectable: !1
}), i(Frr, "DialogListProvider"), i(Orr, "useDialogListContext");

}
