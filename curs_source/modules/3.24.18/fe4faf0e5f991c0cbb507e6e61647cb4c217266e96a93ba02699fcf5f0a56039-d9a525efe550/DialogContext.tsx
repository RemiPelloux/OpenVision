import { i } from "./plugin-brand-icon.js";
import { c as Bui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as Gui } from "./react-runtime/react/esm-index-production.js";
import { useContext as Uui } from "./react-runtime/react/esm-index-production.js";
import { createContext as qui } from "./react-runtime/react/esm-index-production.js";
function dfe(r) {
    const e = Uui(oNe);
    if (!e) throw new Error(`${r} must be used within Dialog`);
    return e;
}
function Nrr() {
    const r = Bui(3), e = Gui(), a = `${e}-title`, s = `${e}-description`;
    let l;
    return r[0] !== a || r[1] !== s ? (l = {
        titleId: a,
        descriptionId: s
    }, r[0] = a, r[1] = s, r[2] = l) : l = r[2], l;
}
var oNe;
export { Nrr, dfe, oNe };
var __wakaru_YY_initialized = false;
export function YY() {
if (__wakaru_YY_initialized) return;
__wakaru_YY_initialized = true;
"use strict";
oNe = qui(null), i(dfe, "useDialogPartContext"), i(Nrr, "useDialogIds");

}
