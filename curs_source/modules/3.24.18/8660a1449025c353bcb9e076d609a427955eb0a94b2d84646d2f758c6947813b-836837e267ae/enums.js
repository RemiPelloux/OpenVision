import { E } from "./tslib.es6.js";
var NYg, ELk;
export { ELk, NYg };
var __wakaru_LYg_initialized = false;
export function LYg() {
if (__wakaru_LYg_initialized) return;
__wakaru_LYg_initialized = true;
"use strict";
E(), NYg = [
    "top",
    "right",
    "bottom",
    "left"
], ELk = NYg.reduce((t, e)=>t.concat(e, `${e}-start`, `${e}-end`), []);

}
