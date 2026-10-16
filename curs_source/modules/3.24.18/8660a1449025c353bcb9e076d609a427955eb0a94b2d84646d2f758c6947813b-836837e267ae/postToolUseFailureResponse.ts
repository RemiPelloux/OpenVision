import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
import { o7a } from "./yBp.js";
var Qym;
export { Qym };
var __wakaru_q61_initialized = false;
export function q61() {
if (__wakaru_q61_initialized) return;
__wakaru_q61_initialized = true;
"use strict";
E(), Gae(), Zz(), Qym = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    return o7a(t.additional_context, "additional_context", n), k6(n.length === 0, n);
};

}
