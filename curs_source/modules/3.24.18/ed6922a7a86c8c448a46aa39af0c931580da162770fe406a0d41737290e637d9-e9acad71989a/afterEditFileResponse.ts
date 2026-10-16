import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var hMd;
export { hMd };
var __wakaru_Bkv_initialized = false;
export function Bkv() {
if (__wakaru_Bkv_initialized) return;
__wakaru_Bkv_initialized = true;
"use strict";
x(), VU(), hMd = (e)=>{
    const t = R6(e);
    return t.isValid, t;
};

}
