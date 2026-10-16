import { xps } from "./grok_bot_pb.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var wI_, CI_, TI_, EI_, II_, vwc;
export { CI_, EI_, II_, TI_, vwc, wI_ };
var __wakaru_pUi_initialized = false;
export function pUi() {
if (__wakaru_pUi_initialized) return;
__wakaru_pUi_initialized = true;
"use strict";
E(), xps(), Hu(), wI_ = {
    kind: "omitted"
}, CI_ = new TextDecoder, TI_ = {
    host_shell: "Shell",
    box_shell: "Shell",
    mcp: "MCP tool",
    computer: "Computer use",
    automation_write: "Automations",
    cloud_agent: "Cloud agent",
    subagent: "Subagent",
    feedback: "Feedback",
    bot_share: "Bot share"
}, EI_ = "inferenceHookOutcome", II_ = {
    working: !1,
    activity: void 0,
    retrying: !1,
    updatedAtMs: 0,
    staleAfterMs: 0
}, vwc = "group:";

}
