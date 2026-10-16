import { Gae, dCe, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var oSm;
export { oSm };
var __wakaru_Q61_initialized = false;
export function Q61() {
if (__wakaru_Q61_initialized) return;
__wakaru_Q61_initialized = true;
"use strict";
E(), Gae(), Zz(), oSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [], i = t;
    if (i.permission !== void 0) {
        const r = [
            "allow",
            "deny",
            "ask"
        ];
        r.includes(i.permission) || n.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`);
    }
    return i.user_message !== void 0 && !dCe(i.user_message) && n.push("user_message must be a string if provided"), k6(n.length === 0, n);
};

}
