import { i } from "./plugin-brand-icon.js";
import * as sHn from "./react-runtime/react/esm-index-production.js";
function j0r(r = !0) {
    const e = sHn.useContext(LLt);
    if (e === void 0 && !r) throw new Error("Base UI: ToggleGroupContext is missing. ToggleGroup parts must be placed within <ToggleGroup>.");
    return e;
}
var LLt;
export { LLt, j0r };
var __wakaru_H4i_initialized = false;
export function H4i() {
if (__wakaru_H4i_initialized) return;
__wakaru_H4i_initialized = true;
"use client";
LLt = sHn.createContext(void 0), LLt.displayName = "ToggleGroupContext", i(j0r, "useToggleGroupContext");

}
