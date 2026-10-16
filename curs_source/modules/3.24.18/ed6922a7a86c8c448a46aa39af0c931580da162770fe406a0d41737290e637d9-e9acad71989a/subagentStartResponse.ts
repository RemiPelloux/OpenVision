import { Tde, wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var xMd;
export { xMd };
var __wakaru_Jkv_initialized = false;
export function Jkv() {
if (__wakaru_Jkv_initialized) return;
__wakaru_Jkv_initialized = true;
"use strict";
x(), wX(), VU(), xMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [], i = e;
    if (i.permission !== void 0) {
        const r = [
            "allow",
            "deny",
            "ask"
        ];
        r.includes(i.permission) || n.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`);
    }
    return i.user_message !== void 0 && !Tde(i.user_message) && n.push("user_message must be a string if provided"), wN(n.length === 0, n);
};

}
