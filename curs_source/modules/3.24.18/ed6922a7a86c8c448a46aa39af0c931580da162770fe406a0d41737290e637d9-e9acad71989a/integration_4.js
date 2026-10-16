import { $dt, hqe, pqe } from "./featureFlagsIntegration.js";
import { $u } from "./index_10.js";
import { x } from "./tslib.es6.js";
var CYh, TYh;
export { CYh, TYh };
var __wakaru_n1__initialized = false;
export function n1_() {
if (__wakaru_n1__initialized) return;
__wakaru_n1__initialized = true;
x(), $u(), CYh = ()=>({
        name: "OpenFeature",
        processEvent (e, t, n) {
            return $dt(e);
        }
    }), TYh = class {
    after(e, t) {
        hqe(t.flagKey, t.value), pqe(t.flagKey, t.value);
    }
    error(e, t, n) {
        hqe(e.flagKey, e.defaultValue), pqe(e.flagKey, e.defaultValue);
    }
};

}
