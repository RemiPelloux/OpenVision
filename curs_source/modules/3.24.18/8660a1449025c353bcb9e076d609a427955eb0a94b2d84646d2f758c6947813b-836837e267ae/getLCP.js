import { a0o } from "./Iwo.js";
import { _Ku, yvy } from "./LCPEntryManager.js";
import { AXn, zun } from "./bindReporter.js";
import { GFt, Kun } from "./getActivationStart.js";
import { bpr, u0o } from "./getVisibilityWatcher.js";
import { RXn, Yun } from "./initMetric.js";
import { l0o } from "./initUnique.js";
import { Xun, qFt } from "./observe.js";
import { _pr, c0o } from "./runOnce.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
import { MXn, ypr } from "./whenActivated.js";
import { f0o, mKu } from "./whenIdleOrHidden.js";
var bKu, yKu;
export { bKu, yKu };
var __wakaru_Svy_initialized = false;
export function Svy() {
if (__wakaru_Svy_initialized) return;
__wakaru_Svy_initialized = true;
"use strict";
E(), Rse(), AXn(), Kun(), u0o(), RXn(), l0o(), yvy(), Xun(), c0o(), ypr(), mKu(), bKu = [
    2500,
    4e3
], yKu = (t, e = {})=>{
    MXn(()=>{
        const n = bpr(), i = Yun("LCP");
        let r;
        const s = a0o(e, _Ku), o = (l)=>{
            e.reportAllChanges || (l = l.slice(-1));
            for (const c of l)s._processEntry(c), c.startTime < n.firstHiddenTime && (i.value = Math.max(c.startTime - GFt(), 0), i.entries = [
                c
            ], r());
        }, a = qFt("largest-contentful-paint", o);
        if (a) {
            r = zun(t, i, bKu, e.reportAllChanges);
            const l = _pr(()=>{
                o(a.takeRecords()), a.disconnect(), r(!0);
            });
            for (const c of [
                "keydown",
                "click",
                "visibilitychange"
            ])Zk.document && addEventListener(c, ()=>f0o(l), {
                capture: !0,
                once: !0
            });
        }
    });
};

}
