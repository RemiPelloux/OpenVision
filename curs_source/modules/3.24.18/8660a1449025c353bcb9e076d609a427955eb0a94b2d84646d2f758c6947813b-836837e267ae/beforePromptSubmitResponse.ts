import { Gae, dCe, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var Yym;
export { Yym };
var __wakaru_H61_initialized = false;
export function H61() {
if (__wakaru_H61_initialized) return;
__wakaru_H61_initialized = true;
"use strict";
E(), Gae(), Zz(), Yym = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    return t.continue !== void 0 && typeof t.continue != "boolean" && n.push("continue must be a boolean if provided"), t.user_message !== void 0 && typeof t.user_message != "string" && n.push("user_message must be a string if provided"), t.additional_context !== void 0 && !dCe(t.additional_context) && n.push("additional_context must be a string if provided"), k6(n.length === 0, n);
};

}
