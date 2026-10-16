import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
import { o7a } from "./yBp.js";
var nSm;
export { nSm };
var __wakaru_K61_initialized = false;
export function K61() {
if (__wakaru_K61_initialized) return;
__wakaru_K61_initialized = true;
"use strict";
E(), Gae(), Zz(), nSm = (t)=>{
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
    return t.user_message !== void 0 && typeof t.user_message != "string" && e.push("Invalid user_message value. Expected a string if provided"), t.agent_message !== void 0 && typeof t.agent_message != "string" && e.push("Invalid agent_message value. Expected a string if provided"), t.updated_input !== void 0 && (typeof t.updated_input != "object" || t.updated_input === null || Array.isArray(t.updated_input)) && e.push("Invalid updated_input value. Expected a plain object if provided"), o7a(t.additional_context, "additional_context", e), k6(e.length === 0, e);
};

}
