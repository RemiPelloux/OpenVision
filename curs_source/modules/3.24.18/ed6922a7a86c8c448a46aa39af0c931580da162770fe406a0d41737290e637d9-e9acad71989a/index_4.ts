import { I$ } from "./De_3.js";
import { Gp } from "./index_3.ts";
import { _fv } from "./label-middleware.ts";
import { x } from "./tslib.es6.js";
var KNu, oYs;
export { KNu, oYs };
var __wakaru_mde_initialized = false;
export function mde() {
if (__wakaru_mde_initialized) return;
__wakaru_mde_initialized = true;
x(), Gp(), _fv(), KNu = {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
}, oYs = I$(Symbol("metricsBackend"), KNu);

}
