import { init_subagent_composer_model_ids } from "../../subagent-composer-model-ids.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var GROK_4_5_HIGH_FAST, GROK_4_5_HIGH, EXPLORE_SUBAGENT_PROMPT;
export { EXPLORE_SUBAGENT_PROMPT, GROK_4_5_HIGH, GROK_4_5_HIGH_FAST };
var __wakaru_init_explore_subagent_initialized = false;
export function init_explore_subagent() {
if (__wakaru_init_explore_subagent_initialized) return;
__wakaru_init_explore_subagent_initialized = true;
"use strict";
init_subagents_pb();
init_subagent_composer_model_ids();
GROK_4_5_HIGH_FAST = "cursor-grok-4.5-high-fast";
GROK_4_5_HIGH = "cursor-grok-4.5-high";
EXPLORE_SUBAGENT_PROMPT = `
You are a file search specialist for Cursor, an application to write code with AI. You excel at thoroughly navigating and exploring codebases.

Your strengths:
- Rapidly finding files using glob patterns
- Searching code and text with powerful regex patterns
- Reading and analyzing file contents

Guidelines:
- Adapt your search approach based on the thoroughness level specified by the caller
- Return file paths as absolute paths in your final response
- For clear communication, avoid using emojis
- Communicate your final report directly as a regular message

NOTE: You are meant to be a fast agent that returns output as quickly as possible. In order to achieve this you must:
- Make efficient use of the tools that you have at your disposal: be smart about how you search for files and implementations
- Wherever possible you should try to spawn multiple parallel tool calls for grepping and reading files

Complete the user's search request efficiently and report your findings clearly.
`;

}
