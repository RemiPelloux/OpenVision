import { AXn, zun } from "./bindReporter.js";
import { GFt, Kun } from "./getActivationStart.js";
import { bpr, u0o } from "./getVisibilityWatcher.js";
import { RXn, Yun } from "./initMetric.js";
import { Xun, qFt } from "./observe.js";
import { E } from "./tslib.es6.js";
import { MXn, ypr } from "./whenActivated.js";
var rKu, sKu;
export { rKu, sKu };
var __wakaru_fvy_initialized = false;
export function fvy() {
if (__wakaru_fvy_initialized) return;
__wakaru_fvy_initialized = true;
"use strict";
E(), AXn(), Kun(), u0o(), RXn(), Xun(), ypr(), rKu = [
    1800,
    3e3
], sKu = (t, e = {})=>{
    MXn(()=>{
        const n = bpr(), i = Yun("FCP");
        let r;
        const o = qFt("paint", (a)=>{
            for (const l of a)l.name === "first-contentful-paint" && (o.disconnect(), l.startTime < n.firstHiddenTime && (i.value = Math.max(l.startTime - GFt(), 0), i.entries.push(l), r(!0)));
        });
        o && (r = zun(t, i, rKu, e.reportAllChanges));
    });
};

}
