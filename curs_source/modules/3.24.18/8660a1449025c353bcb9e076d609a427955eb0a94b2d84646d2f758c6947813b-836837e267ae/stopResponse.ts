import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var sSm;
export { sSm };
var __wakaru_Z61_initialized = false;
export function Z61() {
if (__wakaru_Z61_initialized) return;
__wakaru_Z61_initialized = true;
"use strict";
E(), Gae(), Zz(), sSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    return t.followup_message !== void 0 && typeof t.followup_message != "string" && n.push("followup_message must be a string if provided"), k6(n.length === 0, n);
};

}
