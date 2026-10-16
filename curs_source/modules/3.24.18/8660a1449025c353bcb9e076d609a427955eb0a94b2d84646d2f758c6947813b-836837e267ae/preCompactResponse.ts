import { Gae, k6, oGt } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var eSm, tSm;
export { eSm, tSm };
var __wakaru_V61_initialized = false;
export function V61() {
if (__wakaru_V61_initialized) return;
__wakaru_V61_initialized = true;
"use strict";
E(), Gae(), Zz(), eSm = (t)=>typeof t == "string", tSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    if (t == null || Object.keys(t).length === 0) return k6(!0, []);
    const n = [];
    if (!oGt(t)) return n.push("PreCompact response must be an object"), k6(!1, n);
    const i = t;
    return i.user_message !== void 0 && !eSm(i.user_message) && n.push("user_message must be a string"), k6(n.length === 0, n);
};

}
