import { UkS, p5r } from "./ProgressRootDataAttributes.js";
import { E } from "./tslib.es6.js";
var gga;
export { gga };
var __wakaru_g9h_initialized = false;
export function g9h() {
if (__wakaru_g9h_initialized) return;
__wakaru_g9h_initialized = true;
E(), UkS(), gga = {
    status (t) {
        return t === "progressing" ? {
            [p5r.progressing]: ""
        } : t === "complete" ? {
            [p5r.complete]: ""
        } : t === "indeterminate" ? {
            [p5r.indeterminate]: ""
        } : null;
    }
};

}
