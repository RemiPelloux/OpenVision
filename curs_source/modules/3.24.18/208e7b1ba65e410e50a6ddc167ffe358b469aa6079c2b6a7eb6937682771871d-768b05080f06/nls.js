import { Qx } from "./nls.messages.js";
import { h } from "./tslib.es6.js";
function vm() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}
var t4;
export { t4, vm };
var __wakaru_Ne_initialized = false;
export function Ne() {
if (__wakaru_Ne_initialized) return;
__wakaru_Ne_initialized = true;
"use strict";
h(), Qx(), Qx(), t4 = vm() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

}
