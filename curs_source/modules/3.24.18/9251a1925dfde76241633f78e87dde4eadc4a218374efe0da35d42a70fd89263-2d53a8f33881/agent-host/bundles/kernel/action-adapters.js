import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { init_dist35 } from "../../../agent/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var AgentHostUnknownToolError, BLOB_ENCRYPTION_KEY_HEADER_NAME;
export { AgentHostUnknownToolError, BLOB_ENCRYPTION_KEY_HEADER_NAME };
var __wakaru_init_action_adapters_initialized = false;
export function init_action_adapters() {
if (__wakaru_init_action_adapters_initialized) return;
__wakaru_init_action_adapters_initialized = true;
"use strict";
init_dist35();
init_dist5();
init_agent_pb();
AgentHostUnknownToolError = class extends Error {
    constructor(option, unknownNames){
        super(`${option} must be ToolCall field names such as read_tool_call; no tool is named ${unknownNames.join(", ")}`);
        this.name = "AgentHostUnknownToolError";
    }
};
BLOB_ENCRYPTION_KEY_HEADER_NAME = "x-blob-encryption-key";

}
