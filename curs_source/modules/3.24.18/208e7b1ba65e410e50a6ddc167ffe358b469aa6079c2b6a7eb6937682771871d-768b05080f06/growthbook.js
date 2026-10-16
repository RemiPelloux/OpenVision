import { tt } from "./debug-build.js";
import { lt } from "./debug-logger.js";
import { SI } from "./featureFlags.js";
import { EB, wB, yB } from "./featureFlagsIntegration.js";
import { ar } from "./integration.js";
import { _r } from "./object.js";
import { ao } from "./scope.js";
import { h } from "./tslib.es6.js";
function IC(e, t, n) {
    if (!(t in e)) return;
    const r = e[t];
    if (typeof r != "function") return;
    const s = n(r);
    typeof s == "function" && h3e(s, r);
    try {
        e[t] = s;
    } catch  {
        tt && lt.log(`Failed to replace method "${t}" in object`, e);
    }
}
function h3e(e, t) {
    try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n, ao(e, "__sentry_original__", t);
    } catch  {}
}
function CB(e) {
    return function(...t) {
        const n = t[0], r = e.apply(this, t);
        return typeof n == "string" && typeof r == "boolean" && (wB(n, r), EB(n, r)), r;
    };
}
var f8e;
export { CB, IC, f8e, h3e };
var __wakaru_IB_initialized = false;
export function IB() {
if (__wakaru_IB_initialized) return;
__wakaru_IB_initialized = true;
"use strict";
h(), ar(), SI(), _r(), f8e = ({ growthbookClass: e })=>({
        name: "GrowthBook",
        setupOnce () {
            const t = e.prototype;
            typeof t.isOn == "function" && IC(t, "isOn", CB), typeof t.getFeatureValue == "function" && IC(t, "getFeatureValue", CB);
        },
        processEvent (t, n, r) {
            return yB(t);
        }
    });

}
