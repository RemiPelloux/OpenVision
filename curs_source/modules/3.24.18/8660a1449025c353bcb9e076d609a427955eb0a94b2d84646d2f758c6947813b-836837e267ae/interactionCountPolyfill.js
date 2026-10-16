import { Xun, qFt } from "./observe.js";
import { E } from "./tslib.es6.js";
var d0o, Spr, DXn, lKu, h0o, p0o, cKu;
export { DXn, Spr, cKu, d0o, h0o, lKu, p0o };
var __wakaru_uKu_initialized = false;
export function uKu() {
if (__wakaru_uKu_initialized) return;
__wakaru_uKu_initialized = true;
"use strict";
E(), Xun(), d0o = 0, Spr = 1 / 0, DXn = 0, lKu = (t)=>{
    t.forEach((e)=>{
        e.interactionId && (Spr = Math.min(Spr, e.interactionId), DXn = Math.max(DXn, e.interactionId), d0o = DXn ? (DXn - Spr) / 7 + 1 : 0);
    });
}, p0o = ()=>h0o ? d0o : performance.interactionCount || 0, cKu = ()=>{
    "interactionCount" in performance || h0o || (h0o = qFt("event", lKu, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
};

}
