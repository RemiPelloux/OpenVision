import { x } from "./tslib.es6.js";
var __wakaru_gvl_initialized = false;
export function gvl() {
if (__wakaru_gvl_initialized) return;
__wakaru_gvl_initialized = true;
x();

}
