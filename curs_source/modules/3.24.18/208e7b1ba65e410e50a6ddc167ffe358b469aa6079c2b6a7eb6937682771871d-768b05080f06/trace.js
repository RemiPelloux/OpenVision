import { _d } from "./baggage.js";
import { xs } from "./carrier.js";
import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { co } from "./dynamicSamplingContext.js";
import { Rk } from "./handleCallbackErrors.js";
import { kd } from "./hasSpansEnabled.js";
import { Pp } from "./index_2.js";
import { YC } from "./logSpans.js";
import { Op } from "./parseSampleRate.js";
import { oo } from "./propagationContext.js";
import { nW } from "./sampling.js";
import { Rn } from "./semanticAttributes.js";
import { Ek } from "./sentryNonRecordingSpan.js";
import { Sc } from "./spanOnScope.js";
import { XC, sr } from "./spanUtils.js";
import { fd } from "./spanstatus.js";
import { Tk } from "./tracing.js";
import { h } from "./tslib.es6.js";
import { Dp } from "./utils.js";
var QC;
export { QC };
var __wakaru_Sd_initialized = false;
export function Sd() {
if (__wakaru_Sd_initialized) return;
__wakaru_Sd_initialized = true;
"use strict";
h(), Pp(), xs(), dt(), gt(), Rn(), _d(), Ke(), Rk(), kd(), Op(), oo(), Sc(), sr(), Tk(), co(), YC(), nW(), Ek(), XC(), fd(), Dp(), QC = "__SENTRY_SUPPRESS_TRACING__";

}
