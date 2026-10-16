import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var vMd;
export { vMd };
var __wakaru_Vkv_initialized = false;
export function Vkv() {
if (__wakaru_Vkv_initialized) return;
__wakaru_Vkv_initialized = true;
"use strict";
x(), wX(), VU(), vMd = (e)=>{
    const t = [], n = R6(e);
    if (!n.isValid) return n;
    if (e.permission !== void 0) {
        const i = [
            "allow",
            "deny"
        ];
        i.includes(e.permission) || t.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
    return e.user_message !== void 0 && typeof e.user_message != "string" && t.push("user_message must be a string if provided"), wN(t.length === 0, t);
};

}
