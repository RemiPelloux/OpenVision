import { $dt, hqe, pqe } from "./featureFlagsIntegration.js";
import { $u } from "./index_10.js";
import { x } from "./tslib.es6.js";
var IYh;
export { IYh };
var __wakaru_o1__initialized = false;
export function o1_() {
if (__wakaru_o1__initialized) return;
__wakaru_o1__initialized = true;
x(), $u(), IYh = ({ featureFlagClient: e })=>({
        name: "Statsig",
        setup (t) {
            e.on("gate_evaluation", (n)=>{
                hqe(n.gate.name, n.gate.value), pqe(n.gate.name, n.gate.value);
            });
        },
        processEvent (t, n, i) {
            return $dt(t);
        }
    });

}
