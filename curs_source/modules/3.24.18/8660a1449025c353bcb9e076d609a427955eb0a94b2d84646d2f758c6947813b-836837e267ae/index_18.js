import { hxy } from "./api_3.js";
import { Rkr } from "./autorun.js";
import { E7o, VOd } from "./consoleObservableLogger.js";
import { ugn } from "./derived.js";
import { JOd, Lxy } from "./devToolsLogger.js";
import { ED, nY } from "./process.js";
import { gxy } from "./promise.js";
import { E } from "./tslib.es6.js";
import { vxy } from "./utilsCancellation.js";
import { LAe } from "./utils_10.js";
import { f9t, m7o, sxy, wxy, ytt } from "./ze.js";
var e5d;
export { e5d };
var __wakaru_Oxy_initialized = false;
export function Oxy() {
if (__wakaru_Oxy_initialized) return;
__wakaru_Oxy_initialized = true;
"use strict";
E(), hxy(), Rkr(), ytt(), ugn(), gxy(), vxy(), LAe(), f9t(), VOd(), Lxy(), nY(), sxy(wxy), e5d = !1, e5d && m7o(new E7o), ED && ED.VSCODE_DEV_DEBUG && m7o(JOd.getInstance());

}
