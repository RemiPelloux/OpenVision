import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { $dt, hqe, pqe } from "./featureFlagsIntegration.js";
import { sA } from "./growthbook.js";
import { $u } from "./index_10.js";
import { x } from "./tslib.es6.js";
function i1_(e) {
    return function(...t) {
        const n = t[0], i = e.apply(this, t);
        return typeof n == "string" && typeof i == "boolean" ? (hqe(n, i), pqe(n, i)) : kg && zr.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${i} (${typeof i})`), i;
    };
}
var EYh;
export { EYh, i1_ };
var __wakaru_r1__initialized = false;
export function r1_() {
if (__wakaru_r1__initialized) return;
__wakaru_r1__initialized = true;
x(), $u(), _Z(), EYh = ({ featureFlagClientClass: e })=>({
        name: "Unleash",
        setupOnce () {
            const t = e.prototype;
            sA(t, "isEnabled", i1_);
        },
        processEvent (t, n, i) {
            return $dt(t);
        }
    });

}
