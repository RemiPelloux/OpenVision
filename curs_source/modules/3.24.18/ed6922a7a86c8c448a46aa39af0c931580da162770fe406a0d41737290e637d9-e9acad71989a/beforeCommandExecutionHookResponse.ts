import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var Qro;
export { Qro };
var __wakaru_Wkv_initialized = false;
export function Wkv() {
if (__wakaru_Wkv_initialized) return;
__wakaru_Wkv_initialized = true;
"use strict";
x(), wX(), VU(), Qro = (e)=>{
    const t = [], n = R6(e);
    if (!n.isValid) return n;
    if (e.permission !== void 0) {
        const i = [
            "allow",
            "deny",
            "ask"
        ];
        i.includes(e.permission) || t.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
    return e.user_message !== void 0 && typeof e.user_message != "string" && t.push("Invalid user_message value. Expected a string if provided"), e.agent_message !== void 0 && typeof e.agent_message != "string" && t.push("Invalid agent_message value. Expected a string if provided"), wN(t.length === 0, t);
};

}
