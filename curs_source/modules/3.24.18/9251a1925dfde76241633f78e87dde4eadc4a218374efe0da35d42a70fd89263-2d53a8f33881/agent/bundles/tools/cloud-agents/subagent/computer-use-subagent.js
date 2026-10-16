import { init_computer_use5 } from "../computer-use/index.js";
import { init_types13 } from "../../core/subagent/types.js";
import { createComputerUseSubagentConfig } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var DEFAULT_COMPUTER_USE_MODEL_IDS, COMPUTER_USE_SUBAGENT_PROMPT, COMPUTER_USE_SUBAGENT_TOOL_IDENTIFIERS, COMPUTER_USE_SUBAGENT_CONFIG;
export { COMPUTER_USE_SUBAGENT_CONFIG, COMPUTER_USE_SUBAGENT_PROMPT, COMPUTER_USE_SUBAGENT_TOOL_IDENTIFIERS, DEFAULT_COMPUTER_USE_MODEL_IDS };
var __wakaru_init_computer_use_subagent_initialized = false;
export function init_computer_use_subagent() {
if (__wakaru_init_computer_use_subagent_initialized) return;
__wakaru_init_computer_use_subagent_initialized = true;
"use strict";
init_subagents_pb();
init_types13();
init_computer_use5();
DEFAULT_COMPUTER_USE_MODEL_IDS = [
    "claude-sonnet-5-thinking-high",
    "claude-4.5-sonnet"
];
COMPUTER_USE_SUBAGENT_PROMPT = `Enter COMPUTER USE mode. Follow the provided instruction above.`;
COMPUTER_USE_SUBAGENT_TOOL_IDENTIFIERS = new Set([
    "SHELL",
    "READ",
    "GREP",
    "GLOB"
]);
COMPUTER_USE_SUBAGENT_CONFIG = createComputerUseSubagentConfig();

}
