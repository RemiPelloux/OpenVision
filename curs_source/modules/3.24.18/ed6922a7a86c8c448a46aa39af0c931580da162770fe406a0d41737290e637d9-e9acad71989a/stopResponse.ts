import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var EMd;
export { EMd };
var __wakaru_Qkv_initialized = false;
export function Qkv() {
if (__wakaru_Qkv_initialized) return;
__wakaru_Qkv_initialized = true;
"use strict";
x(), wX(), VU(), EMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    return e.followup_message !== void 0 && typeof e.followup_message != "string" && n.push("followup_message must be a string if provided"), wN(n.length === 0, n);
};

}
