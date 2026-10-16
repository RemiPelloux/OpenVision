import { init_labeling_agent_mode } from "./labeling-agent-mode.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist28 } from "../../../../agent-transcript/dist/index.js";
import { init_dist37 } from "../../../../chat-inference-proto/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
var MANAGED_LOCAL_AGENT_MODE, logger143;
export { MANAGED_LOCAL_AGENT_MODE, logger143 };
var __wakaru_init_managed_local_labeling_initialized = false;
export function init_managed_local_labeling() {
if (__wakaru_init_managed_local_labeling_initialized) return;
__wakaru_init_managed_local_labeling_initialized = true;
"use strict";
init_dist28();
init_dist37();
init_dist();
init_inference_pb();
init_labeling_agent_mode();
MANAGED_LOCAL_AGENT_MODE = "managed-local-agent";
logger143 = createLogger("@anysphere/agent-host:managed-local-labeling");

}
