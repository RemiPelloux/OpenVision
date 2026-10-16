import { Qh } from "./debug-build.js";
import { zr } from "./debug-logger.js";
import { xVr } from "./featureFlags.js";
import { $dt, hqe, pqe } from "./featureFlagsIntegration.js";
import { YH } from "./integration.js";
import { wV } from "./object.js";
import { rhi } from "./qIc.js";
import { x } from "./tslib.es6.js";
function sA(e, t, n) {
    if (!(t in e)) return;
    const i = e[t];
    if (typeof i != "function") return;
    const r = n(i);
    typeof r == "function" && rhi(r, i);
    try {
        e[t] = r;
    } catch  {
        Qh && zr.log(`Failed to replace method "${t}" in object`, e);
    }
}
function f0c(e) {
    return function(...t) {
        const n = t[0], i = e.apply(this, t);
        return typeof n == "string" && typeof i == "boolean" && (hqe(n, i), pqe(n, i)), i;
    };
}
var IVr;
export { IVr, f0c, sA };
var __wakaru_v0c_initialized = false;
export function v0c() {
if (__wakaru_v0c_initialized) return;
__wakaru_v0c_initialized = true;
"use strict";
x(), YH(), xVr(), wV(), IVr = ({ growthbookClass: e })=>({
        name: "GrowthBook",
        setupOnce () {
            const t = e.prototype;
            typeof t.isOn == "function" && sA(t, "isOn", f0c), typeof t.getFeatureValue == "function" && sA(t, "getFeatureValue", f0c);
        },
        processEvent (t, n, i) {
            return $dt(t);
        }
    });

}
