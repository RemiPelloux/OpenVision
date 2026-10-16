import { $dt } from "./featureFlagsIntegration.js";
import { $u } from "./index_10.js";
import { x } from "./tslib.es6.js";
var wYh;
export { wYh };
var __wakaru_t1__initialized = false;
export function t1_() {
if (__wakaru_t1__initialized) return;
__wakaru_t1__initialized = true;
x(), $u(), wYh = ()=>({
        name: "LaunchDarkly",
        processEvent (e, t, n) {
            return $dt(e);
        }
    });

}
