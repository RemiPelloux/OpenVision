import { HLt, lpn } from "./bindReporter.js";
import { GLt, Kdt } from "./getActivationStart.js";
import { WLt, ypi } from "./getNavigationEntry.js";
import { VLt, upn } from "./initMetric.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
import { Cpi, hpn } from "./whenActivated.js";
var eEc, xpi, tEc;
export { eEc, tEc, xpi };
var __wakaru_Ocg_initialized = false;
export function Ocg() {
if (__wakaru_Ocg_initialized) return;
__wakaru_Ocg_initialized = true;
"use strict";
x(), fK(), lpn(), GLt(), ypi(), upn(), Cpi(), eEc = [
    800,
    1800
], xpi = (e)=>{
    by.document?.prerendering ? hpn(()=>xpi(e)) : by.document?.readyState !== "complete" ? addEventListener("load", ()=>xpi(e), !0) : setTimeout(e);
}, tEc = (e, t = {})=>{
    const n = VLt("TTFB"), i = HLt(e, n, eEc, t.reportAllChanges);
    xpi(()=>{
        const r = WLt();
        r && (n.value = Math.max(r.responseStart - Kdt(), 0), n.entries = [
            r
        ], i(!0));
    });
};

}
