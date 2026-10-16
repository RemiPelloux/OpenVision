import { CLAUDE_CODE_COMPACTION_PROMPT, GENERALIZED_SELF_SUMMARIZATION_PROMPT, SELF_SUMMARIZATION_PROMPT, init_constants5 } from "./constants.js";
import { OPENAI_COMPACTION_PROMPT, init_openai_compaction_handler } from "./openai-compaction-handler.js";
import { XAI_COMPACTION_SUMMARIZE_PROMPT, XAI_COMPACTION_SYSTEM_PROMPT, init_xai_compaction_handler } from "./xai-compaction-handler.js";
var SELF_SUMMARY_REQUEST_PROMPTS;
export { SELF_SUMMARY_REQUEST_PROMPTS };
var __wakaru_init_request_prompts_initialized = false;
export function init_request_prompts() {
if (__wakaru_init_request_prompts_initialized) return;
__wakaru_init_request_prompts_initialized = true;
"use strict";
init_constants5();
init_openai_compaction_handler();
init_xai_compaction_handler();
SELF_SUMMARY_REQUEST_PROMPTS = [
    SELF_SUMMARIZATION_PROMPT,
    GENERALIZED_SELF_SUMMARIZATION_PROMPT,
    CLAUDE_CODE_COMPACTION_PROMPT,
    OPENAI_COMPACTION_PROMPT,
    `${XAI_COMPACTION_SYSTEM_PROMPT}

${XAI_COMPACTION_SUMMARIZE_PROMPT}`
];

}
