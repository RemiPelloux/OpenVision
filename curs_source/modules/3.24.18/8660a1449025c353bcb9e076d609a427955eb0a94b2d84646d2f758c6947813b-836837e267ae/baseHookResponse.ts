import { Gae, k6, oGt } from "./base.ts";
import { E } from "./tslib.es6.js";
var KW;
export { KW };
var __wakaru_Zz_initialized = false;
export function Zz() {
if (__wakaru_Zz_initialized) return;
__wakaru_Zz_initialized = true;
"use strict";
E(), Gae(), KW = (t)=>{
    const e = [];
    return oGt(t) ? k6(!0) : (e.push("Expected an object"), k6(!1, e));
};

}
