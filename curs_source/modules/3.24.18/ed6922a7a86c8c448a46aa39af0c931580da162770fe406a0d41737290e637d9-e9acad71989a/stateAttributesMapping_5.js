import { FDi, euf } from "./ProgressRootDataAttributes.js";
import { x } from "./tslib.es6.js";
var STs;
export { STs };
var __wakaru_NBl_initialized = false;
export function NBl() {
if (__wakaru_NBl_initialized) return;
__wakaru_NBl_initialized = true;
x(), euf(), STs = {
    status (e) {
        return e === "progressing" ? {
            [FDi.progressing]: ""
        } : e === "complete" ? {
            [FDi.complete]: ""
        } : e === "indeterminate" ? {
            [FDi.indeterminate]: ""
        } : null;
    }
};

}
