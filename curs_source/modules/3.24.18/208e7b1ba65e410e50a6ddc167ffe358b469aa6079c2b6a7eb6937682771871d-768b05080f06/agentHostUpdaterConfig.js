import { uh } from "./agentHarnessLayout.js";
import { h } from "./tslib.es6.js";
import { Ym } from "./updateReleaseTrack.js";
var rE, eTe, tTe, Bu, sE, a9, nTe, rTe, sTe, iTe;
export { Bu, a9, eTe, iTe, nTe, rE, rTe, sE, sTe, tTe };
var __wakaru_aTe_initialized = false;
export function aTe() {
if (__wakaru_aTe_initialized) return;
__wakaru_aTe_initialized = true;
"use strict";
h(), Ym(), uh(), rE = "CURSOR_AGENT_HARNESS", eTe = "[AgentHostUpdater]", tTe = "CURSOR_AGENT_HARNESS_ROOT", Bu = "CURSOR_AGENT_HARNESS_CDN", sE = "CURSOR_AGENT_HARNESS_CHANNEL", a9 = "CURSOR_AGENT_HARNESS_POLL_MS", nTe = 300 * 1e3, rTe = 5 * 1e3, sTe = 15 * 1e3, iTe = {
    pollIntervalMs: {
        min: 60 * 1e3,
        max: 1440 * 60 * 1e3
    },
    requestIdleTimeoutMs: {
        min: 10 * 1e3,
        max: 300 * 1e3
    }
};

}
