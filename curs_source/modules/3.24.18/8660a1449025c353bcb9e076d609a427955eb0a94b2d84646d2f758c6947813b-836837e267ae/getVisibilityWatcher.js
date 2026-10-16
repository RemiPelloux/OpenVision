import { GFt, Kun } from "./getActivationStart.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var Zun, tKu, PXn, nKu, iKu, bpr;
export { PXn, Zun, bpr, iKu, nKu, tKu };
var __wakaru_u0o_initialized = false;
export function u0o() {
if (__wakaru_u0o_initialized) return;
__wakaru_u0o_initialized = true;
"use strict";
E(), Rse(), Kun(), Zun = -1, tKu = ()=>Zk.document?.visibilityState === "hidden" && !Zk.document?.prerendering ? 0 : 1 / 0, PXn = (t)=>{
    Zk.document.visibilityState === "hidden" && Zun > -1 && (Zun = t.type === "visibilitychange" ? t.timeStamp : 0, iKu());
}, nKu = ()=>{
    addEventListener("visibilitychange", PXn, !0), addEventListener("prerenderingchange", PXn, !0);
}, iKu = ()=>{
    removeEventListener("visibilitychange", PXn, !0), removeEventListener("prerenderingchange", PXn, !0);
}, bpr = ()=>{
    if (Zk.document && Zun < 0) {
        const t = GFt();
        Zun = (Zk.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((n)=>n.name === "hidden" && n.startTime > t)[0]?.startTime) ?? tKu(), nKu();
    }
    return {
        get firstHiddenTime () {
            return Zun;
        }
    };
};

}
