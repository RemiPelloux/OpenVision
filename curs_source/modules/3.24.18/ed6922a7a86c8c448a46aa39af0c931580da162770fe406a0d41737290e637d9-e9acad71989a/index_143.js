import { xIf } from "./external.js";
import { x } from "./tslib.es6.js";
var __wakaru_IIf_initialized = false;
export function IIf() {
if (__wakaru_IIf_initialized) return;
__wakaru_IIf_initialized = true;
x(), xIf();

}
