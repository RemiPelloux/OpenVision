import { E } from "./tslib.es6.js";
var L3r, HY;
export { HY, L3r };
var __wakaru_yla_initialized = false;
export function yla() {
if (__wakaru_yla_initialized) return;
__wakaru_yla_initialized = true;
E(), L3r = new Set([
    "alnum",
    "alpha",
    "ascii",
    "blank",
    "cntrl",
    "digit",
    "graph",
    "lower",
    "print",
    "punct",
    "space",
    "upper",
    "word",
    "xdigit"
]), HY = String.raw;

}
