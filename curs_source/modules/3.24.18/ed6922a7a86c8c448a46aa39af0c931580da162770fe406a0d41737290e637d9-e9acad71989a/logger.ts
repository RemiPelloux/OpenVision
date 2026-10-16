import { I$, ffv } from "./De_3.js";
import { ofv } from "./index_2.ts";
import { x } from "./tslib.es6.js";
var $Nu, HNu, WNu, GNu, VNu, jNu, qNu, sYs;
export { $Nu, GNu, HNu, VNu, WNu, jNu, qNu, sYs };
var __wakaru_zNu_initialized = false;
export function zNu() {
if (__wakaru_zNu_initialized) return;
__wakaru_zNu_initialized = true;
"use strict";
x(), ofv(), $Nu = 2, HNu = 6, WNu = 50, GNu = 40, VNu = 200, jNu = ffv(), qNu = {
    log: (e, t)=>jNu.log(e, t)
}, sYs = I$(Symbol("loggerBackend"), qNu);

}
