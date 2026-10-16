import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { init_types6 } from "./types.js";
import { init_x11_executor } from "./x11-executor.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { ComputerUseSettleOutcome, init_computer_use_tool_pb } from "../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var SETTLE_OUTCOMES, sessionDuration, sessionActionCount, sessionResult, sessionActionKind, logger18;
export { SETTLE_OUTCOMES, logger18, sessionActionCount, sessionActionKind, sessionDuration, sessionResult };
var __wakaru_init_computer_use2_initialized = false;
export function init_computer_use2() {
if (__wakaru_init_computer_use2_initialized) return;
__wakaru_init_computer_use2_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist4();
init_computer_use_tool_pb();
init_types6();
init_x11_executor();
SETTLE_OUTCOMES = {
    none: ComputerUseSettleOutcome.NONE,
    fixed: ComputerUseSettleOutcome.FIXED,
    stable: ComputerUseSettleOutcome.STABLE,
    cap: ComputerUseSettleOutcome.CAP,
    capture_failed: ComputerUseSettleOutcome.CAPTURE_FAILED
};
sessionDuration = createHistogram("computer_use.session.duration_ms", {
    description: "Duration of computer-use session in milliseconds"
});
sessionActionCount = createHistogram("computer_use.session.action_count", {
    description: "Number of actions executed in a computer-use session"
});
sessionResult = createCounter("computer_use.session.result", {
    description: "Result status of computer-use session",
    labelNames: [
        "outcome"
    ]
});
sessionActionKind = createCounter("computer_use.session.action_kind", {
    description: "Requested computer-use actions by bounded kind",
    labelNames: [
        "kind"
    ]
});
logger18 = createLogger("computer-use");

}
