import { Sjr } from "./HVr.js";
import { Lcg, ZTc } from "./LCPEntryManager.js";
import { HLt, lpn } from "./bindReporter.js";
import { GLt, Kdt } from "./getActivationStart.js";
import { Cjr, wpi } from "./getVisibilityWatcher.js";
import { VLt, upn } from "./initMetric.js";
import { kjr } from "./initUnique.js";
import { Ydt, jLt } from "./observe.js";
import { kpi, wjr } from "./runOnce.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
import { Cpi, hpn } from "./whenActivated.js";
import { Rjr, zTc } from "./whenIdleOrHidden.js";
var QTc, JTc;
export { JTc, QTc };
var __wakaru_Ncg_initialized = false;
export function Ncg() {
if (__wakaru_Ncg_initialized) return;
__wakaru_Ncg_initialized = true;
"use strict";
x(), fK(), lpn(), GLt(), Cjr(), upn(), kjr(), Lcg(), jLt(), wjr(), Cpi(), zTc(), QTc = [
    2500,
    4e3
], JTc = (e, t = {})=>{
    hpn(()=>{
        const n = wpi(), i = VLt("LCP");
        let r;
        const s = Sjr(t, ZTc), o = (c)=>{
            t.reportAllChanges || (c = c.slice(-1));
            for (const l of c)s._processEntry(l), l.startTime < n.firstHiddenTime && (i.value = Math.max(l.startTime - Kdt(), 0), i.entries = [
                l
            ], r());
        }, a = Ydt("largest-contentful-paint", o);
        if (a) {
            r = HLt(e, i, QTc, t.reportAllChanges);
            const c = kpi(()=>{
                o(a.takeRecords()), a.disconnect(), r(!0);
            });
            for (const l of [
                "keydown",
                "click",
                "visibilitychange"
            ])by.document && addEventListener(l, ()=>Rjr(c), {
                capture: !0,
                once: !0
            });
        }
    });
};

}
