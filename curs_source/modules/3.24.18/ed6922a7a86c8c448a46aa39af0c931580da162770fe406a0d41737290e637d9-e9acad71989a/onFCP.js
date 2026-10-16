import { HLt, lpn } from "./bindReporter.js";
import { GLt, Kdt } from "./getActivationStart.js";
import { Cjr, wpi } from "./getVisibilityWatcher.js";
import { VLt, upn } from "./initMetric.js";
import { Ydt, jLt } from "./observe.js";
import { x } from "./tslib.es6.js";
import { Cpi, hpn } from "./whenActivated.js";
var FTc, BTc;
export { BTc, FTc };
var __wakaru_Rcg_initialized = false;
export function Rcg() {
if (__wakaru_Rcg_initialized) return;
__wakaru_Rcg_initialized = true;
"use strict";
x(), lpn(), GLt(), Cjr(), upn(), jLt(), Cpi(), FTc = [
    1800,
    3e3
], BTc = (e, t = {})=>{
    hpn(()=>{
        const n = wpi(), i = VLt("FCP");
        let r;
        const o = Ydt("paint", (a)=>{
            for (const c of a)c.name === "first-contentful-paint" && (o.disconnect(), c.startTime < n.firstHiddenTime && (i.value = Math.max(c.startTime - Kdt(), 0), i.entries.push(c), r(!0)));
        });
        o && (r = HLt(e, i, FTc, t.reportAllChanges));
    });
};

}
