import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
import { o7a } from "./yBp.js";
var Jym;
export { Jym };
var __wakaru_z61_initialized = false;
export function z61() {
if (__wakaru_z61_initialized) return;
__wakaru_z61_initialized = true;
"use strict";
E(), Gae(), Zz(), Jym = (t)=>{
    const e = [], n = KW(t);
    return n.isValid ? (o7a(t.additional_context, "additional_context", e), k6(e.length === 0, e)) : n;
};

}
