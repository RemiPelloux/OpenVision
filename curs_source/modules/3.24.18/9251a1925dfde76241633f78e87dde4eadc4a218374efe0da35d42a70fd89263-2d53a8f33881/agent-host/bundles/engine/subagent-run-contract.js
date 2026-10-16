import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_default_model } from "./default-model.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_ask_question_tool_pb } from "../../../proto/dist/generated/agent/v1/ask_question_tool_pb.js";
import { init_subagent_exec_pb } from "../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
var UUID_REGEX, WATCH_VIDEO_SUBAGENT_TYPE, MAX_WATCH_VIDEO_ATTACHMENTS, MAX_WATCH_VIDEO_INLINE_BYTES;
export { MAX_WATCH_VIDEO_ATTACHMENTS, MAX_WATCH_VIDEO_INLINE_BYTES, UUID_REGEX, WATCH_VIDEO_SUBAGENT_TYPE };
var __wakaru_init_subagent_run_contract_initialized = false;
export function init_subagent_run_contract() {
if (__wakaru_init_subagent_run_contract_initialized) return;
__wakaru_init_subagent_run_contract_initialized = true;
"use strict";
init_dist7();
init_dist8();
init_agent_pb();
init_ask_question_tool_pb();
init_subagent_exec_pb();
init_subagents_pb();
init_default_model();
UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
WATCH_VIDEO_SUBAGENT_TYPE = "watchVideo";
MAX_WATCH_VIDEO_ATTACHMENTS = 5;
MAX_WATCH_VIDEO_INLINE_BYTES = 35 * 1024 * 1024;

}
