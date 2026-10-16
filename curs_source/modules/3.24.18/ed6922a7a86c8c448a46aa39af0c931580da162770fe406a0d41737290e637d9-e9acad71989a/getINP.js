import { Sjr } from "./HVr.js";
import { Mcg, jTc } from "./InteractionManager.js";
import { HLt, lpn } from "./bindReporter.js";
import { VLt, upn } from "./initMetric.js";
import { kjr } from "./initUnique.js";
import { GTc, WTc } from "./interactionCountPolyfill.js";
import { Ydt, jLt } from "./observe.js";
import { Ajr, qTc } from "./onHidden.js";
import { x } from "./tslib.es6.js";
import { Cpi, hpn } from "./whenActivated.js";
import { Rjr, zTc } from "./whenIdleOrHidden.js";
var KTc, YTc, XTc;
export { KTc, XTc, YTc };
var __wakaru_Pcg_initialized = false;
export function Pcg() {
if (__wakaru_Pcg_initialized) return;
__wakaru_Pcg_initialized = true;
"use strict";
x(), lpn(), upn(), kjr(), Mcg(), jLt(), qTc(), GTc(), Cpi(), zTc(), KTc = [
    200,
    500
], YTc = 40, XTc = (e, t = {})=>{
    globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && hpn(()=>{
        WTc();
        const n = VLt("INP");
        let i;
        const r = Sjr(t, jTc), s = (a)=>{
            for (const c of a)r._processEntry(c);
            Rjr(()=>{
                const c = r._estimateP98LongestInteraction();
                c && c._latency !== n.value && (n.value = c._latency, n.entries = c.entries, i());
            });
        }, o = Ydt("event", s, {
            durationThreshold: t.durationThreshold ?? YTc
        });
        i = HLt(e, n, KTc, t.reportAllChanges), o && (o.observe({
            type: "first-input",
            buffered: !0
        }), Ajr(()=>{
            s(o.takeRecords()), i(!0);
        }));
    });
};

}
