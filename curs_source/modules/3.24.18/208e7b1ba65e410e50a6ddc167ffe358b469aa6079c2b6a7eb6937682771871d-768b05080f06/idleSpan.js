import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { co } from "./dynamicSamplingContext.js";
import { kd } from "./hasSpansEnabled.js";
import { Rn } from "./semanticAttributes.js";
import { Ek } from "./sentryNonRecordingSpan.js";
import { VC } from "./should-ignore-span.js";
import { Sc } from "./spanOnScope.js";
import { XC, sr } from "./spanUtils.js";
import { fd } from "./spanstatus.js";
import { us } from "./time.js";
import { Sd } from "./trace.js";
import { h } from "./tslib.es6.js";
var __wakaru_fFe_initialized = false;
export function fFe() {
if (__wakaru_fFe_initialized) return;
__wakaru_fFe_initialized = true;
"use strict";
h(), dt(), gt(), Rn(), Ke(), kd(), VC(), Sc(), sr(), us(), co(), Ek(), XC(), fd(), Sd();

}
