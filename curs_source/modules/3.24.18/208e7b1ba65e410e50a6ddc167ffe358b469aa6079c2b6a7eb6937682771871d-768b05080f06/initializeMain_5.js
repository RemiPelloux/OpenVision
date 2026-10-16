import { uh } from "./agentHarnessLayout.js";
import { qA } from "./agentHarnessSignature.js";
import { s3 } from "./agentHostUpdate.config.contribution.js";
import { ETe } from "./agentHostUpdater.js";
import { aTe } from "./agentHostUpdaterConfig.js";
import { gst } from "./agentHostUpdaterFetch.js";
import { hTe } from "./agentHostUpdaterTelemetry.js";
import { Mt } from "./cancellation.js";
import { at } from "./configuration.js";
import { Ye } from "./environmentMainService.js";
import { j } from "./lifecycle.js";
import { te } from "./log.js";
import { Ome } from "./power.js";
import { Tt } from "./productService.js";
import { fs } from "./request_2.js";
import { _a } from "./sentry.js";
import { c1 } from "./tracingService.js";
import { h } from "./tslib.es6.js";
import { pt } from "./windows.js";
var Vu;
export { Vu };
var __wakaru_Tst_initialized = false;
export function Tst() {
if (__wakaru_Tst_initialized) return;
__wakaru_Tst_initialized = true;
"use strict";
h(), Mt(), j(), at(), Ye(), te(), Ome(), Tt(), fs(), _a(), c1(), pt(), uh(), s3(), qA(), ETe(), aTe(), hTe(), gst(), Vu = "[AgentHostUpdater]";

}
