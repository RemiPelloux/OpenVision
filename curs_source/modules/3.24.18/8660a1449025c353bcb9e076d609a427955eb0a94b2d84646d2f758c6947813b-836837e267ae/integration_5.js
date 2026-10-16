import { NFw } from "./BA.js";
import { uce } from "./debug-build_3.js";
import { OFt } from "./featureFlagsIntegration.js";
import { CD } from "./growthbook.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var Uqf;
export { Uqf };
var __wakaru_LFw_initialized = false;
export function LFw() {
if (__wakaru_LFw_initialized) return;
__wakaru_LFw_initialized = true;
E(), fh(), uce(), Uqf = ({ featureFlagClientClass: t })=>({
        name: "Unleash",
        setupOnce () {
            const e = t.prototype;
            CD(e, "isEnabled", NFw);
        },
        processEvent (e, n, i) {
            return OFt(e);
        }
    });

}
