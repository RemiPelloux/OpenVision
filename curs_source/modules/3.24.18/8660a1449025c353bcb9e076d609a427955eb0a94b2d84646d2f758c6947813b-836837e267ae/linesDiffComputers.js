import { ATr, VGo } from "./defaultLinesDiffComputer.js";
import { oDp, rDp } from "./legacyLinesDiffComputer.js";
import { E } from "./tslib.es6.js";
var tpe;
export { tpe };
var __wakaru_zHt_initialized = false;
export function zHt() {
if (__wakaru_zHt_initialized) return;
__wakaru_zHt_initialized = true;
"use strict";
E(), oDp(), VGo(), tpe = {
    getLegacy: ()=>new rDp,
    getDefault: ()=>new ATr
};

}
