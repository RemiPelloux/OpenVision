import { MPu } from "./identity_2.js";
import { BPu } from "./mergeMap.js";
import { x } from "./tslib.es6.js";
var __wakaru_xpv_initialized = false;
export function xpv() {
if (__wakaru_xpv_initialized) return;
__wakaru_xpv_initialized = true;
x(), BPu(), MPu();

}
