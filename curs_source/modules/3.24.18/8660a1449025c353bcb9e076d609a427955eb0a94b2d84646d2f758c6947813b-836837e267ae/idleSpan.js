import { JA } from "./currentScopes.js";
import { qR } from "./debug-build.js";
import { JC } from "./debug-logger.js";
import { Evt } from "./dynamicSamplingContext.js";
import { xun } from "./hasSpansEnabled.js";
import { QH } from "./semanticAttributes.js";
import { vhr } from "./sentryNonRecordingSpan.js";
import { W1o } from "./should-ignore-span.js";
import { yFt } from "./spanOnScope.js";
import { nko, uQ } from "./spanUtils.js";
import { Eun } from "./spanstatus.js";
import { pke } from "./time.js";
import { Mun } from "./trace.js";
import { E } from "./tslib.es6.js";
var xFt, DWu, NWu, LWu, OWu;
export { DWu, LWu, NWu, OWu, xFt };
var __wakaru_Rdy_initialized = false;
export function Rdy() {
if (__wakaru_Rdy_initialized) return;
__wakaru_Rdy_initialized = true;
"use strict";
E(), JA(), qR(), QH(), JC(), xun(), W1o(), yFt(), uQ(), pke(), Evt(), vhr(), nko(), Eun(), Mun(), xFt = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
}, DWu = "heartbeatFailed", NWu = "idleTimeout", LWu = "finalTimeout", OWu = "externalFinish";

}
