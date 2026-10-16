import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var MXn;
export { MXn };
var __wakaru_ypr_initialized = false;
export function ypr() {
if (__wakaru_ypr_initialized) return;
__wakaru_ypr_initialized = true;
"use strict";
E(), Rse(), MXn = (t)=>{
    Zk.document?.prerendering ? addEventListener("prerenderingchange", ()=>t(), !0) : t();
};

}
