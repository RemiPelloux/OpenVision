import { ehr } from "./SZu.js";
import { rg } from "./debug-build.js";
import { so } from "./debug-logger.js";
import { pwo } from "./featureFlags.js";
import { Avt, OFt, xvt } from "./featureFlagsIntegration.js";
import { hQ } from "./integration.js";
import { Rte } from "./object.js";
import { E } from "./tslib.es6.js";
function CD(t, e, n) {
    if (!(e in t)) return;
    const i = t[e];
    if (typeof i != "function") return;
    const r = n(i);
    typeof r == "function" && ehr(r, i);
    try {
        t[e] = r;
    } catch  {
        rg && so.log(`Failed to replace method "${e}" in object`, t);
    }
}
function Fqu(t) {
    return function(...e) {
        const n = e[0], i = t.apply(this, e);
        return typeof n == "string" && typeof i == "boolean" && (xvt(n, i), Avt(n, i)), i;
    };
}
var mwo;
export { CD, Fqu, mwo };
var __wakaru_Bqu_initialized = false;
export function Bqu() {
if (__wakaru_Bqu_initialized) return;
__wakaru_Bqu_initialized = true;
"use strict";
E(), hQ(), pwo(), Rte(), mwo = ({ growthbookClass: t })=>({
        name: "GrowthBook",
        setupOnce () {
            const e = t.prototype;
            typeof e.isOn == "function" && CD(e, "isOn", Fqu), typeof e.getFeatureValue == "function" && CD(e, "getFeatureValue", Fqu);
        },
        processEvent (e, n, i) {
            return OFt(e);
        }
    });

}
