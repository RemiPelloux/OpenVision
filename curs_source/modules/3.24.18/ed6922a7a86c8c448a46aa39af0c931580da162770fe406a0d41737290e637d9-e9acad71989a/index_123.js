import { tjg } from "./core.js";
import { hjg } from "./format-smart.js";
import { x } from "./tslib.es6.js";
var __wakaru_qys_initialized = false;
export function qys() {
if (__wakaru_qys_initialized) return;
__wakaru_qys_initialized = true;
x(), tjg(), hjg();

}
