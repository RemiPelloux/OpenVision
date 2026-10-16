import { OFt } from "./featureFlagsIntegration.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var Oqf;
export { Oqf };
var __wakaru_MFw_initialized = false;
export function MFw() {
if (__wakaru_MFw_initialized) return;
__wakaru_MFw_initialized = true;
E(), fh(), Oqf = ()=>({
        name: "LaunchDarkly",
        processEvent (t, e, n) {
            return OFt(t);
        }
    });

}
