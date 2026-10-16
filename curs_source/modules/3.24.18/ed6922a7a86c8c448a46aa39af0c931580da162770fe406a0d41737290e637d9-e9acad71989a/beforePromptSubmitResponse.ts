import { Tde, wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var fMd;
export { fMd };
var __wakaru_Gkv_initialized = false;
export function Gkv() {
if (__wakaru_Gkv_initialized) return;
__wakaru_Gkv_initialized = true;
"use strict";
x(), wX(), VU(), fMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    return e.continue !== void 0 && typeof e.continue != "boolean" && n.push("continue must be a boolean if provided"), e.user_message !== void 0 && typeof e.user_message != "string" && n.push("user_message must be a string if provided"), e.additional_context !== void 0 && !Tde(e.additional_context) && n.push("additional_context must be a string if provided"), wN(n.length === 0, n);
};

}
