import { uqe } from "./dynamicSamplingContext.js";
import { Eng } from "./errors.js";
import { Vng } from "./idleSpan.js";
import { hGr } from "./logSpans.js";
import { swc } from "./measurement.js";
import { lwc } from "./sampling.js";
import { Shi } from "./sentryNonRecordingSpan.js";
import { fGr } from "./spanUtils.js";
import { SLt } from "./spanstatus.js";
import { xLt } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Ihn } from "./utils.js";
var __wakaru_KH_initialized = false;
export function KH() {
if (__wakaru_KH_initialized) return;
__wakaru_KH_initialized = true;
"use strict";
x(), Eng(), Ihn(), Vng(), fGr(), Shi(), SLt(), SLt(), xLt(), uqe(), swc(), lwc(), hGr();

}
