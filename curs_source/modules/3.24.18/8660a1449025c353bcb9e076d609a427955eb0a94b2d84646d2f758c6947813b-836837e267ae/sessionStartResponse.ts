import { Gae, dCe, k6, oGt } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var rSm;
export { rSm };
var __wakaru_X61_initialized = false;
export function X61() {
if (__wakaru_X61_initialized) return;
__wakaru_X61_initialized = true;
"use strict";
E(), Gae(), Zz(), rSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    if (t.env !== void 0) if (!oGt(t.env)) n.push("env must be an object if provided");
    else for (const [i, r] of Object.entries(t.env))dCe(i) || n.push(`env key "${i}" must be a string`), dCe(r) || n.push(`env value for "${i}" must be a string`);
    return t.additional_context !== void 0 && !dCe(t.additional_context) && n.push("additional_context must be a string if provided"), t.continue !== void 0 && typeof t.continue != "boolean" && n.push("continue must be a boolean if provided"), t.user_message !== void 0 && !dCe(t.user_message) && n.push("user_message must be a string if provided"), k6(n.length === 0, n);
};

}
