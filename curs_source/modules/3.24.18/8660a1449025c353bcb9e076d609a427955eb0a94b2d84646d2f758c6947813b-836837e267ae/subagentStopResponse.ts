import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var aSm;
export { aSm };
var __wakaru_J61_initialized = false;
export function J61() {
if (__wakaru_J61_initialized) return;
__wakaru_J61_initialized = true;
"use strict";
E(), Gae(), Zz(), aSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    return t !== void 0 && typeof t == "object" && t !== null && t.followup_message !== void 0 && typeof t.followup_message != "string" && n.push("followup_message must be a string if provided"), k6(n.length === 0, n);
};

}
