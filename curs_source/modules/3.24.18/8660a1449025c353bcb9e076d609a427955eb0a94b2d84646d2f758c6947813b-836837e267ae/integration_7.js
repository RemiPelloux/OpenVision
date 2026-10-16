import { Avt, OFt, xvt } from "./featureFlagsIntegration.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var $qf;
export { $qf };
var __wakaru_FFw_initialized = false;
export function FFw() {
if (__wakaru_FFw_initialized) return;
__wakaru_FFw_initialized = true;
E(), fh(), $qf = ({ featureFlagClient: t })=>({
        name: "Statsig",
        setup (e) {
            t.on("gate_evaluation", (n)=>{
                xvt(n.gate.name, n.gate.value), Avt(n.gate.name, n.gate.value);
            });
        },
        processEvent (e, n, i) {
            return OFt(e);
        }
    });

}
