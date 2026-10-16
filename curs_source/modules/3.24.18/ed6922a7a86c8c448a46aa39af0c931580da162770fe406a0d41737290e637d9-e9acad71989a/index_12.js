import { Jdg } from "./api_2.js";
import { Dmn } from "./autorun.js";
import { pYr, rDc } from "./consoleObservableLogger.js";
import { n2t } from "./derived.js";
import { khg, uDc } from "./devToolsLogger.js";
import { QH, oR } from "./process.js";
import { ihg } from "./promise.js";
import { Pht, hBe, qdg, tYr, uhg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { shg } from "./utilsCancellation.js";
import { xge } from "./utils_10.js";
var dDc;
export { dDc };
var __wakaru_whg_initialized = false;
export function whg() {
if (__wakaru_whg_initialized) return;
__wakaru_whg_initialized = true;
"use strict";
x(), Jdg(), Dmn(), hBe(), n2t(), ihg(), shg(), xge(), Pht(), rDc(), khg(), QH(), qdg(uhg), dDc = !1, dDc && tYr(new pYr), oR && oR.VSCODE_DEV_DEBUG && tYr(uDc.getInstance());

}
