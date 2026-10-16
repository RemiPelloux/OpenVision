import { x } from "./tslib.es6.js";
var GCt, HMh;
export { GCt, HMh };
var __wakaru_der_initialized = false;
export function der() {
if (__wakaru_der_initialized) return;
__wakaru_der_initialized = true;
"use strict";
x(), GCt = (e)=>e.startsWith("/") || e.startsWith("\\") ? GCt(e.slice(1)) : e, HMh = (e)=>e.endsWith("/") || e.endsWith("\\") ? e.slice(0, -1) : e;

}
