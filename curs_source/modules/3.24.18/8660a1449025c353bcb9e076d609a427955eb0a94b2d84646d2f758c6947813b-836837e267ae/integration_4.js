import { Avt, OFt, xvt } from "./featureFlagsIntegration.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var Fqf, Bqf;
export { Bqf, Fqf };
var __wakaru_DFw_initialized = false;
export function DFw() {
if (__wakaru_DFw_initialized) return;
__wakaru_DFw_initialized = true;
E(), fh(), Fqf = ()=>({
        name: "OpenFeature",
        processEvent (t, e, n) {
            return OFt(t);
        }
    }), Bqf = class {
    after(t, e) {
        xvt(e.flagKey, e.value), Avt(e.flagKey, e.value);
    }
    error(t, e, n) {
        xvt(t.flagKey, t.defaultValue), Avt(t.flagKey, t.defaultValue);
    }
};

}
