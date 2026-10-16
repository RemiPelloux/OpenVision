import { init_dist9 } from "../../../agent-client/dist/index.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var logger118;
export { logger118 };
var __wakaru_init_hosted_child_request_context_initialized = false;
export function init_hosted_child_request_context() {
if (__wakaru_init_hosted_child_request_context_initialized) return;
__wakaru_init_hosted_child_request_context_initialized = true;
"use strict";
init_dist9();
init_dist8();
init_dist();
init_request_context_exec_pb();
logger118 = createLogger("agent-host:hosted-child-request-context");

}
