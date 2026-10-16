import { Ms } from "./nls.messages.js";
import { w } from "./tslib.es6.js";
function Ns() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}
var $s;
export { $s, Ns };
var __wakaru_Vt_initialized = false;
export function Vt() {
if (__wakaru_Vt_initialized) return;
__wakaru_Vt_initialized = true;
"use strict";
w(), Ms(), Ms(), $s = Ns() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

}
