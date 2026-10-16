import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "../common.js";
import { init_common8 } from "../../utils/common.js";
import { init_event_tracking } from "../../utils/event-tracking.js";
import { init_request_id } from "../../utils/request-id.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../../dist_exports.js";
import { init_dist30 } from "../../../../hooks-carriers/dist/index.js";
import { init_dist6 } from "../../../../hooks/dist/index.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_exec_pb } from "../../../../proto/dist/generated/agent/v1/exec_pb.js";
import { init_hooks_pb } from "../../../../proto/dist/generated/agent/v1/hooks_pb.js";
import { init_requested_model_pb } from "../../../../proto/dist/generated/agent/v1/requested_model_pb.js";
var logger50, remoteHookDuration, remoteHookCount, RemoteHookBlockedError;
export { RemoteHookBlockedError, logger50, remoteHookCount, remoteHookDuration };
var __wakaru_init_remote_hooks_initialized = false;
export function init_remote_hooks() {
if (__wakaru_init_remote_hooks_initialized) return;
__wakaru_init_remote_hooks_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist6();
init_dist30();
init_dist4();
init_exec_pb();
init_hooks_pb();
init_requested_model_pb();
init_esm2();
init_common8();
init_event_tracking();
init_request_id();
init_common9();
logger50 = createLogger("remote-hooks");
remoteHookDuration = createHistogram("remote_hook.duration_ms", {
    description: "Duration of remote hook execution in milliseconds",
    labelNames: [
        "hook_type",
        "outcome"
    ]
});
remoteHookCount = createCounter("remote_hook.count", {
    description: "Count of remote hook executions",
    labelNames: [
        "hook_type",
        "outcome"
    ]
});
RemoteHookBlockedError = class extends Error {
    constructor(message, reason){
        super(message);
        this.reason = reason;
        this.toolCallAuditOutcome = "denied";
        this.name = "RemoteHookBlockedError";
    }
};
RemoteHookBlockedError.telemetryName = "RemoteHookBlockedError";

}
