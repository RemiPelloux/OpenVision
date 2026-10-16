import { K7 } from "./Observable_3.js";
import { TOa } from "./async_2.js";
import { hqr } from "./executeSchedule.js";
import { tFp } from "./isDate.js";
import { E } from "./tslib.es6.js";
var iFp;
export { iFp };
var __wakaru_$M1_initialized = false;
export function $M1() {
if (__wakaru_$M1_initialized) return;
__wakaru_$M1_initialized = true;
E(), TOa(), tFp(), K7(), hqr(), iFp = class extends Error {
    info;
    constructor(t = null){
        super("Timeout has occurred"), this.info = t, this.name = "TimeoutError";
    }
};

}
