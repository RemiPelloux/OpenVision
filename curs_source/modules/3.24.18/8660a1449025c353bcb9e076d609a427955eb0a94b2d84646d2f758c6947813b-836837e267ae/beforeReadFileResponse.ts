import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var Xym;
export { Xym };
var __wakaru_W61_initialized = false;
export function W61() {
if (__wakaru_W61_initialized) return;
__wakaru_W61_initialized = true;
"use strict";
E(), Gae(), Zz(), Xym = (t)=>{
    const e = [], n = KW(t);
    if (!n.isValid) return n;
    if (t.permission !== void 0) {
        const i = [
            "allow",
            "deny"
        ];
        i.includes(t.permission) || e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
    return t.user_message !== void 0 && typeof t.user_message != "string" && e.push("user_message must be a string if provided"), k6(e.length === 0, e);
};

}
