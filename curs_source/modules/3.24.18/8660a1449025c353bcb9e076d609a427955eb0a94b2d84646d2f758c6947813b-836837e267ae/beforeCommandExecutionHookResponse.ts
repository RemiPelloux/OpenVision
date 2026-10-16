import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var a7a;
export { a7a };
var __wakaru_$61_initialized = false;
export function $61() {
if (__wakaru_$61_initialized) return;
__wakaru_$61_initialized = true;
"use strict";
E(), Gae(), Zz(), a7a = (t)=>{
    const e = [], n = KW(t);
    if (!n.isValid) return n;
    if (t.permission !== void 0) {
        const i = [
            "allow",
            "deny",
            "ask"
        ];
        i.includes(t.permission) || e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
    return t.user_message !== void 0 && typeof t.user_message != "string" && e.push("Invalid user_message value. Expected a string if provided"), t.agent_message !== void 0 && typeof t.agent_message != "string" && e.push("Invalid agent_message value. Expected a string if provided"), k6(e.length === 0, e);
};

}
