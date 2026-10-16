import { co } from "./dynamicSamplingContext.js";
import { j3e } from "./errors_2.js";
import { fFe } from "./idleSpan.js";
import { YC } from "./logSpans.js";
import { Z8 } from "./measurement.js";
import { nW } from "./sampling.js";
import { Ek } from "./sentryNonRecordingSpan.js";
import { XC } from "./spanUtils.js";
import { fd } from "./spanstatus.js";
import { Sd } from "./trace.js";
import { h } from "./tslib.es6.js";
import { Dp } from "./utils.js";
var __wakaru_ir_initialized = false;
export function ir() {
if (__wakaru_ir_initialized) return;
__wakaru_ir_initialized = true;
"use strict";
h(), j3e(), Dp(), fFe(), XC(), Ek(), fd(), fd(), Sd(), co(), Z8(), nW(), YC();

}
