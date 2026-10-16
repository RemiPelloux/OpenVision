import { Gae, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var iSm;
export { iSm };
var __wakaru_Y61_initialized = false;
export function Y61() {
if (__wakaru_Y61_initialized) return;
__wakaru_Y61_initialized = true;
"use strict";
E(), Gae(), Zz(), iSm = (t)=>{
    const e = KW(t);
    return e.isValid ? k6(!0, []) : e;
};

}
