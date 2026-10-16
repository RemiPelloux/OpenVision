import { Hi, cn } from "./contextkey.js";
import { E } from "./tslib.es6.js";
var n6n, i6n;
export { i6n, n6n };
var __wakaru_vLs_initialized = false;
export function vLs() {
if (__wakaru_vLs_initialized) return;
__wakaru_vLs_initialized = true;
"use strict";
E(), Hi(), n6n = new cn("tabPredictionGoToFileVisibleKey", !1, "Whether a cursor prediction for a target file is currently visible"), i6n = new cn("tabPredictionCodePreviewVisibleKey", !1, "Whether a code preview for a target file is currently visible");

}
