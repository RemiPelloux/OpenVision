import { I5e, xRe } from "./cursor-icons.js";
import { x } from "./tslib.es6.js";
var KKc, YKc, XKc;
export { KKc, XKc, YKc };
var __wakaru_oTg_initialized = false;
export function oTg() {
if (__wakaru_oTg_initialized) return;
__wakaru_oTg_initialized = true;
"use strict";
x(), xRe(), KKc = /(^|-)(left|right)(-|$)/, YKc = new Set([
    "history",
    "link-external",
    "list-bullets",
    "list-ordered",
    "quote",
    "redo",
    "return"
]), XKc = new Set(I5e.filter((e)=>KKc.test(e) || YKc.has(e)));

}
