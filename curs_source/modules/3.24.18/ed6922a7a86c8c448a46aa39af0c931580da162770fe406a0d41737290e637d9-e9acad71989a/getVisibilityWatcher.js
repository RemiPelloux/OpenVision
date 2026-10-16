import { GLt, Kdt } from "./getActivationStart.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var qLt, LTc, dpn, NTc, OTc, wpi;
export { LTc, NTc, OTc, dpn, qLt, wpi };
var __wakaru_Cjr_initialized = false;
export function Cjr() {
if (__wakaru_Cjr_initialized) return;
__wakaru_Cjr_initialized = true;
"use strict";
x(), fK(), GLt(), qLt = -1, LTc = ()=>by.document?.visibilityState === "hidden" && !by.document?.prerendering ? 0 : 1 / 0, dpn = (e)=>{
    by.document.visibilityState === "hidden" && qLt > -1 && (qLt = e.type === "visibilitychange" ? e.timeStamp : 0, OTc());
}, NTc = ()=>{
    addEventListener("visibilitychange", dpn, !0), addEventListener("prerenderingchange", dpn, !0);
}, OTc = ()=>{
    removeEventListener("visibilitychange", dpn, !0), removeEventListener("prerenderingchange", dpn, !0);
}, wpi = ()=>{
    if (by.document && qLt < 0) {
        const e = Kdt();
        qLt = (by.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((n)=>n.name === "hidden" && n.startTime > e)[0]?.startTime) ?? LTc(), NTc();
    }
    return {
        get firstHiddenTime () {
            return qLt;
        }
    };
};

}
