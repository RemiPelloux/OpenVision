import { a0o } from "./Iwo.js";
import { eKu, gvy } from "./LayoutShiftManager.js";
import { AXn, zun } from "./bindReporter.js";
import { RXn, Yun } from "./initMetric.js";
import { l0o } from "./initUnique.js";
import { Xun, qFt } from "./observe.js";
import { fvy, sKu } from "./onFCP.js";
import { _pr, c0o } from "./runOnce.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var oKu, aKu;
export { aKu, oKu };
var __wakaru_vvy_initialized = false;
export function vvy() {
if (__wakaru_vvy_initialized) return;
__wakaru_vvy_initialized = true;
"use strict";
E(), Rse(), AXn(), RXn(), l0o(), gvy(), Xun(), c0o(), fvy(), oKu = [
    .1,
    .25
], aKu = (t, e = {})=>{
    sKu(_pr(()=>{
        const n = Yun("CLS", 0);
        let i;
        const r = a0o(e, eKu), s = (a)=>{
            for (const l of a)r._processEntry(l);
            r._sessionValue > n.value && (n.value = r._sessionValue, n.entries = r._sessionEntries, i());
        }, o = qFt("layout-shift", s);
        o && (i = zun(t, n, oKu, e.reportAllChanges), Zk.document?.addEventListener("visibilitychange", ()=>{
            Zk.document?.visibilityState === "hidden" && (s(o.takeRecords()), i(!0));
        }), Zk?.setTimeout?.(i));
    }));
};

}
