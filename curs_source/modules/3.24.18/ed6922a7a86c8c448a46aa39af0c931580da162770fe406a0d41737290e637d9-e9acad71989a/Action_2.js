import { C$t, N5 } from "./Observable_3.js";
import { x } from "./tslib.es6.js";
var IPu;
export { IPu };
var __wakaru_cpv_initialized = false;
export function cpv() {
if (__wakaru_cpv_initialized) return;
__wakaru_cpv_initialized = true;
x(), N5(), IPu = class extends C$t {
    constructor(e, t){
        super();
    }
    schedule(e, t = 0) {
        return this;
    }
};

}
