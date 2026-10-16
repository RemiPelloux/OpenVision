import { AXn, zun } from "./bindReporter.js";
import { GFt, Kun } from "./getActivationStart.js";
import { Vun, fpr } from "./getNavigationEntry.js";
import { RXn, Yun } from "./initMetric.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
import { MXn, ypr } from "./whenActivated.js";
var SKu, wpr, kKu;
export { SKu, kKu, wpr };
var __wakaru_kvy_initialized = false;
export function kvy() {
if (__wakaru_kvy_initialized) return;
__wakaru_kvy_initialized = true;
"use strict";
E(), Rse(), AXn(), Kun(), fpr(), RXn(), ypr(), SKu = [
    800,
    1800
], wpr = (t)=>{
    Zk.document?.prerendering ? MXn(()=>wpr(t)) : Zk.document?.readyState !== "complete" ? addEventListener("load", ()=>wpr(t), !0) : setTimeout(t);
}, kKu = (t, e = {})=>{
    const n = Yun("TTFB"), i = zun(t, n, SKu, e.reportAllChanges);
    wpr(()=>{
        const r = Vun();
        r && (n.value = Math.max(r.responseStart - GFt(), 0), n.entries = [
            r
        ], i(!0));
    });
};

}
