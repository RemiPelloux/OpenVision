import { Zro } from "./A3u.js";
import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var wMd;
export { wMd };
var __wakaru_Ykv_initialized = false;
export function Ykv() {
if (__wakaru_Ykv_initialized) return;
__wakaru_Ykv_initialized = true;
"use strict";
x(), wX(), VU(), wMd = (e)=>{
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
    return e.user_message !== void 0 && typeof e.user_message != "string" && t.push("Invalid user_message value. Expected a string if provided"), e.agent_message !== void 0 && typeof e.agent_message != "string" && t.push("Invalid agent_message value. Expected a string if provided"), e.updated_input !== void 0 && (typeof e.updated_input != "object" || e.updated_input === null || Array.isArray(e.updated_input)) && t.push("Invalid updated_input value. Expected a plain object if provided"), Zro(e.additional_context, "additional_context", t), wN(t.length === 0, t);
};

}
