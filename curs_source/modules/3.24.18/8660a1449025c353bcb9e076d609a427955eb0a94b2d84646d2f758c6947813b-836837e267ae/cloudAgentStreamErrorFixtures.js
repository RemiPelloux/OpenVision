import { f1k, g1k, m1k, v1k } from "./Ycg.js";
import { ju } from "./agent_pb.js";
import { pd } from "./background_composer_pb.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var qos, qmg, zmg, Vmg, Kmg;
export { Kmg, Vmg, qmg, qos, zmg };
var __wakaru_b1k_initialized = false;
export function b1k() {
if (__wakaru_b1k_initialized) return;
__wakaru_b1k_initialized = true;
"use strict";
E(), nl(), ju(), pd(), qos = "We are having difficulties reaching the AI provider.", qmg = "The AI provider is rate-limiting requests or is temporarily at capacity.", zmg = "We failed to reach the AI provider despite multiple retry attempts.", Vmg = "We are having difficulties reaching the execution environment.", Kmg = {
    transientProviderErrorThenRecovers: m1k,
    transientErrorsThenPermanentError: g1k,
    environmentSetupFailedPermanently: f1k,
    environmentUnreachableThenRecovers: v1k
};

}
