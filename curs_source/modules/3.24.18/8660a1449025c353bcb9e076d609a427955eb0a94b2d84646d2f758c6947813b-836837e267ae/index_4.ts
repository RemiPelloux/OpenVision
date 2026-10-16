import { Ng } from "./index_3.ts";
import { cX } from "./ipa.js";
import { BN1 } from "./label-middleware.ts";
import { E } from "./tslib.es6.js";
var _4p, M5a;
export { M5a, _4p };
var __wakaru_iCe_initialized = false;
export function iCe() {
if (__wakaru_iCe_initialized) return;
__wakaru_iCe_initialized = true;
E(), Ng(), BN1(), _4p = {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
}, M5a = cX(Symbol("metricsBackend"), _4p);

}
