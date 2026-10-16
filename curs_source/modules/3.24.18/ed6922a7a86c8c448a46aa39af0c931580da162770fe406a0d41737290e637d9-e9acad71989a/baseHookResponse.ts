import { nkt, wN, wX } from "./base.ts";
import { x } from "./tslib.es6.js";
var R6;
export { R6 };
var __wakaru_VU_initialized = false;
export function VU() {
if (__wakaru_VU_initialized) return;
__wakaru_VU_initialized = true;
"use strict";
x(), wX(), R6 = (e)=>{
    const t = [];
    return nkt(e) ? wN(!0) : (t.push("Expected an object"), wN(!1, t));
};

}
