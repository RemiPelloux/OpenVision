import { pSv } from "./defaults.mjs";
import { cRs, cSv } from "./filter.mjs";
import { Uut } from "./index_13.mjs";
import { uRs, uSv } from "./mask.mjs";
import { E } from "./tslib.es6.js";
var gSv;
export { gSv };
var __wakaru_fSv_initialized = false;
export function fSv() {
if (__wakaru_fSv_initialized) return;
__wakaru_fSv_initialized = true;
E(), Uut(), cSv(), uSv(), pSv(), gSv = new Set([
    cRs,
    uRs
]);

}
