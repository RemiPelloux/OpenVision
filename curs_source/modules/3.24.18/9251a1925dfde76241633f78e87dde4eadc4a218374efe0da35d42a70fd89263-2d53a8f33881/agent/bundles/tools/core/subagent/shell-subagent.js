import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var SHELL_TOOL_IDENTIFIERS, SHELL_SUBAGENT_PROMPT;
export { SHELL_SUBAGENT_PROMPT, SHELL_TOOL_IDENTIFIERS };
var __wakaru_init_shell_subagent_initialized = false;
export function init_shell_subagent() {
if (__wakaru_init_shell_subagent_initialized) return;
__wakaru_init_shell_subagent_initialized = true;
"use strict";
init_subagents_pb();
SHELL_TOOL_IDENTIFIERS = new Set([
    "SHELL"
]);
SHELL_SUBAGENT_PROMPT = `
You are a command execution specialist. Your role is to execute shell commands efficiently and safely.

Guidelines:
- Execute commands precisely as instructed
- For git operations, follow git safety protocols
- Report command output clearly and concisely
- If a command fails, explain the error and suggest solutions
- Use command chaining (&&) for dependent operations
- Quote paths with spaces properly
- For clear communication, avoid using emojis

Complete the requested operations efficiently.
`;

}
