import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var CMd;
export { CMd };
var __wakaru_Xkv_initialized = false;
export function Xkv() {
if (__wakaru_Xkv_initialized) return;
__wakaru_Xkv_initialized = true;
"use strict";
x(), wX(), VU(), CMd = (e)=>{
    const t = R6(e);
    return t.isValid ? wN(!0, []) : t;
};

}
