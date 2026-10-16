import { i } from "./plugin-brand-icon.js";
import { useContext as _ui } from "./react-runtime/react/esm-index-production.js";
import { createContext as wui } from "./react-runtime/react/esm-index-production.js";
function n3() {
    return _ui(Ier).root;
}
var Ier;
export { Ier, n3 };
var __wakaru_fki_initialized = false;
export function fki() {
if (__wakaru_fki_initialized) return;
__wakaru_fki_initialized = true;
"use strict";
Ier = wui({
    root: null
}), i(n3, "usePortalRoot");

}
