import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var IMd;
export { IMd };
var __wakaru_ewv_initialized = false;
export function ewv() {
if (__wakaru_ewv_initialized) return;
__wakaru_ewv_initialized = true;
"use strict";
x(), wX(), VU(), IMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    return e !== void 0 && typeof e == "object" && e !== null && e.followup_message !== void 0 && typeof e.followup_message != "string" && n.push("followup_message must be a string if provided"), wN(n.length === 0, n);
};

}
