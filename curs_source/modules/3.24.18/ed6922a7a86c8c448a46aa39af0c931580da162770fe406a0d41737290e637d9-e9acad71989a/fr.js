import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var __wakaru_lmf_initialized = false;
export function lmf() {
if (__wakaru_lmf_initialized) return;
__wakaru_lmf_initialized = true;
x(), cv();

}
