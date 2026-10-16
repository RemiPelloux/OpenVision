import { Evt } from "./dynamicSamplingContext.js";
import { hdy } from "./errors.js";
import { Rdy } from "./idleSpan.js";
import { Q1o } from "./logSpans.js";
import { EWu } from "./measurement.js";
import { RWu } from "./sampling.js";
import { vhr } from "./sentryNonRecordingSpan.js";
import { nko } from "./spanUtils.js";
import { Eun } from "./spanstatus.js";
import { Mun } from "./trace.js";
import { E } from "./tslib.es6.js";
import { KYn } from "./utils.js";
var __wakaru_dQ_initialized = false;
export function dQ() {
if (__wakaru_dQ_initialized) return;
__wakaru_dQ_initialized = true;
"use strict";
E(), hdy(), KYn(), Rdy(), nko(), vhr(), Eun(), Eun(), Mun(), Evt(), EWu(), RWu(), Q1o();

}
