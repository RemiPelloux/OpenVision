import { Ydt, jLt } from "./observe.js";
import { x } from "./tslib.es6.js";
var Tjr, Tpi, ppn, HTc, Ejr, xjr, WTc;
export { Ejr, HTc, Tjr, Tpi, WTc, ppn, xjr };
var __wakaru_GTc_initialized = false;
export function GTc() {
if (__wakaru_GTc_initialized) return;
__wakaru_GTc_initialized = true;
"use strict";
x(), jLt(), Tjr = 0, Tpi = 1 / 0, ppn = 0, HTc = (e)=>{
    e.forEach((t)=>{
        t.interactionId && (Tpi = Math.min(Tpi, t.interactionId), ppn = Math.max(ppn, t.interactionId), Tjr = ppn ? (ppn - Tpi) / 7 + 1 : 0);
    });
}, xjr = ()=>Ejr ? Tjr : performance.interactionCount || 0, WTc = ()=>{
    "interactionCount" in performance || Ejr || (Ejr = Ydt("event", HTc, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
};

}
