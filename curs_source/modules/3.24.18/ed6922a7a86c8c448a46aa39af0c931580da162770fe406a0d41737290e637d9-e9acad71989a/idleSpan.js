import { NT } from "./currentScopes.js";
import { kE } from "./debug-build.js";
import { Xk } from "./debug-logger.js";
import { uqe } from "./dynamicSamplingContext.js";
import { wLt } from "./hasSpansEnabled.js";
import { W9 } from "./semanticAttributes.js";
import { Shi } from "./sentryNonRecordingSpan.js";
import { iGr } from "./should-ignore-span.js";
import { Cdt } from "./spanOnScope.js";
import { fGr, zH } from "./spanUtils.js";
import { SLt } from "./spanstatus.js";
import { Vce } from "./time.js";
import { xLt } from "./trace.js";
import { x } from "./tslib.es6.js";
var Mdt, hwc, pwc, mwc, gwc;
export { Mdt, gwc, hwc, mwc, pwc };
var __wakaru_Vng_initialized = false;
export function Vng() {
if (__wakaru_Vng_initialized) return;
__wakaru_Vng_initialized = true;
"use strict";
x(), NT(), kE(), W9(), Xk(), wLt(), iGr(), Cdt(), zH(), Vce(), uqe(), Shi(), fGr(), SLt(), xLt(), Mdt = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
}, hwc = "heartbeatFailed", pwc = "idleTimeout", mwc = "finalTimeout", gwc = "externalFinish";

}
