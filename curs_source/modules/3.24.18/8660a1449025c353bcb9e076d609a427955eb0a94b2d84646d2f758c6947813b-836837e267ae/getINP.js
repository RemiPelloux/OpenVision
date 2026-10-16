import { _vy, hKu } from "./InteractionManager.js";
import { a0o } from "./Iwo.js";
import { AXn, zun } from "./bindReporter.js";
import { RXn, Yun } from "./initMetric.js";
import { l0o } from "./initUnique.js";
import { cKu, uKu } from "./interactionCountPolyfill.js";
import { Xun, qFt } from "./observe.js";
import { g0o, pKu } from "./onHidden.js";
import { E } from "./tslib.es6.js";
import { MXn, ypr } from "./whenActivated.js";
import { f0o, mKu } from "./whenIdleOrHidden.js";
var gKu, fKu, vKu;
export { fKu, gKu, vKu };
var __wakaru_bvy_initialized = false;
export function bvy() {
if (__wakaru_bvy_initialized) return;
__wakaru_bvy_initialized = true;
"use strict";
E(), AXn(), RXn(), l0o(), _vy(), Xun(), pKu(), uKu(), ypr(), mKu(), gKu = [
    200,
    500
], fKu = 40, vKu = (t, e = {})=>{
    globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && MXn(()=>{
        cKu();
        const n = Yun("INP");
        let i;
        const r = a0o(e, hKu), s = (a)=>{
            for (const l of a)r._processEntry(l);
            f0o(()=>{
                const l = r._estimateP98LongestInteraction();
                l && l._latency !== n.value && (n.value = l._latency, n.entries = l.entries, i());
            });
        }, o = qFt("event", s, {
            durationThreshold: e.durationThreshold ?? fKu
        });
        i = zun(t, n, gKu, e.reportAllChanges), o && (o.observe({
            type: "first-input",
            buffered: !0
        }), g0o(()=>{
            s(o.takeRecords()), i(!0);
        }));
    });
};

}
