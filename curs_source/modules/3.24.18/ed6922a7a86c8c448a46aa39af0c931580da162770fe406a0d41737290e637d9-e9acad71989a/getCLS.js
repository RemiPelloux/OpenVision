import { Sjr } from "./HVr.js";
import { Acg, PTc } from "./LayoutShiftManager.js";
import { HLt, lpn } from "./bindReporter.js";
import { VLt, upn } from "./initMetric.js";
import { kjr } from "./initUnique.js";
import { Ydt, jLt } from "./observe.js";
import { BTc, Rcg } from "./onFCP.js";
import { kpi, wjr } from "./runOnce.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var UTc, $Tc;
export { $Tc, UTc };
var __wakaru_Dcg_initialized = false;
export function Dcg() {
if (__wakaru_Dcg_initialized) return;
__wakaru_Dcg_initialized = true;
"use strict";
x(), fK(), lpn(), upn(), kjr(), Acg(), jLt(), wjr(), Rcg(), UTc = [
    .1,
    .25
], $Tc = (e, t = {})=>{
    BTc(kpi(()=>{
        const n = VLt("CLS", 0);
        let i;
        const r = Sjr(t, PTc), s = (a)=>{
            for (const c of a)r._processEntry(c);
            r._sessionValue > n.value && (n.value = r._sessionValue, n.entries = r._sessionEntries, i());
        }, o = Ydt("layout-shift", s);
        o && (i = HLt(e, n, UTc, t.reportAllChanges), by.document?.addEventListener("visibilitychange", ()=>{
            by.document?.visibilityState === "hidden" && (s(o.takeRecords()), i(!0));
        }), by?.setTimeout?.(i));
    }));
};

}
