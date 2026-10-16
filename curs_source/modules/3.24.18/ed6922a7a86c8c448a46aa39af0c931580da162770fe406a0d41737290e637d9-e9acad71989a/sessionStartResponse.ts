import { Tde, nkt, wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var TMd;
export { TMd };
var __wakaru_Zkv_initialized = false;
export function Zkv() {
if (__wakaru_Zkv_initialized) return;
__wakaru_Zkv_initialized = true;
"use strict";
x(), wX(), VU(), TMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    if (e.env !== void 0) if (!nkt(e.env)) n.push("env must be an object if provided");
    else for (const [i, r] of Object.entries(e.env))Tde(i) || n.push(`env key "${i}" must be a string`), Tde(r) || n.push(`env value for "${i}" must be a string`);
    return e.additional_context !== void 0 && !Tde(e.additional_context) && n.push("additional_context must be a string if provided"), e.continue !== void 0 && typeof e.continue != "boolean" && n.push("continue must be a boolean if provided"), e.user_message !== void 0 && !Tde(e.user_message) && n.push("user_message must be a string if provided"), wN(n.length === 0, n);
};

}
