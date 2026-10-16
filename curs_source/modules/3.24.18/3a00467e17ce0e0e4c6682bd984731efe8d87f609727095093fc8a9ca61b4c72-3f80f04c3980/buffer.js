import { Ct, Me } from "./lazy.js";
import { Na } from "./stream.js";
import { w } from "./tslib.es6.js";
var Ma, Fa;
export { Fa, Ma };
var __wakaru_$a_initialized = false;
export function $a() {
if (__wakaru_$a_initialized) return;
__wakaru_$a_initialized = true;
"use strict";
w(), Ct(), Na(), Ma = new Me(()=>new Uint8Array(256)), Fa = 512 * 1024;

}
