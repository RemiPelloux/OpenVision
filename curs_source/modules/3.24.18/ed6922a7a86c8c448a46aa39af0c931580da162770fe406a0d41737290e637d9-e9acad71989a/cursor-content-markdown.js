import { Swt, wvo } from "./cursor-content-tag.js";
import { x } from "./tslib.es6.js";
var eoh;
export { eoh };
var __wakaru_N5v_initialized = false;
export function N5v() {
if (__wakaru_N5v_initialized) return;
__wakaru_N5v_initialized = true;
"use strict";
x(), wvo(), eoh = new RegExp(`<(${Swt})\\b((?:[^>"']|"[^"]*"|'[^']*')*?)\\s*/>`, "gi");

}
