import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var g0o;
export { g0o };
var __wakaru_pKu_initialized = false;
export function pKu() {
if (__wakaru_pKu_initialized) return;
__wakaru_pKu_initialized = true;
"use strict";
E(), Rse(), g0o = (t)=>{
    const e = (n)=>{
        (n.type === "pagehide" || Zk.document?.visibilityState === "hidden") && t(n);
    };
    Zk.document && (addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0));
};

}
