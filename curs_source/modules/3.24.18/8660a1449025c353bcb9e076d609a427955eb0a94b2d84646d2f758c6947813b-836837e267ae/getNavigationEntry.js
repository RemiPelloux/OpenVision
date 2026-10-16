import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var Vun;
export { Vun };
var __wakaru_fpr_initialized = false;
export function fpr() {
if (__wakaru_fpr_initialized) return;
__wakaru_fpr_initialized = true;
"use strict";
E(), Rse(), Vun = (t = !0)=>{
    const e = Zk.performance?.getEntriesByType?.("navigation")[0];
    if (!t || e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
};

}
