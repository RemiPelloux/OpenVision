import { E } from "./tslib.es6.js";
var aEt, Odl;
export { Odl, aEt };
var __wakaru_VIi_initialized = false;
export function VIi() {
if (__wakaru_VIi_initialized) return;
__wakaru_VIi_initialized = true;
"use strict";
E(), aEt = (t)=>t.startsWith("/") || t.startsWith("\\") ? aEt(t.slice(1)) : t, Odl = (t)=>t.endsWith("/") || t.endsWith("\\") ? t.slice(0, -1) : t;

}
