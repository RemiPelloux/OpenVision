import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var Ajr;
export { Ajr };
var __wakaru_qTc_initialized = false;
export function qTc() {
if (__wakaru_qTc_initialized) return;
__wakaru_qTc_initialized = true;
"use strict";
x(), fK(), Ajr = (e)=>{
    const t = (n)=>{
        (n.type === "pagehide" || by.document?.visibilityState === "hidden") && e(n);
    };
    by.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0));
};

}
