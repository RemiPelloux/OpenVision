import { init_core5 } from "../tools/core.js";
import { init_prompt_tag_parsing } from "./prompt-tag-parsing.js";
import { init_prompt_token_tracking } from "./prompt-token-tracking.js";
import { createHistogram } from "../../../dist_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var PROMPT_TOKEN_BREAKDOWN_CATEGORIES, CACHEABLE_CATEGORY_IDS, INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP, promptTokenBreakdownCategoryEstimatedTokens;
export { CACHEABLE_CATEGORY_IDS, INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP, PROMPT_TOKEN_BREAKDOWN_CATEGORIES, promptTokenBreakdownCategoryEstimatedTokens };
var __wakaru_init_prompt_token_breakdown_initialized = false;
export function init_prompt_token_breakdown() {
if (__wakaru_init_prompt_token_breakdown_initialized) return;
__wakaru_init_prompt_token_breakdown_initialized = true;
"use strict";
init_dist4();
init_agent_pb();
init_core5();
init_prompt_tag_parsing();
init_prompt_token_tracking();
PROMPT_TOKEN_BREAKDOWN_CATEGORIES = [
    {
        id: "system_prompt",
        label: "System prompt"
    },
    {
        id: "tools",
        label: "Tool definitions"
    },
    {
        id: "rules",
        label: "Rules"
    },
    {
        id: "skills",
        label: "Skills"
    },
    {
        id: "mcp",
        label: "MCP & dynamic tools"
    },
    {
        id: "subagents",
        label: "Subagent definitions"
    },
    {
        id: "summarized_conversation",
        label: "Summarized conversation"
    },
    {
        id: "conversation",
        label: "Conversation"
    }
];
CACHEABLE_CATEGORY_IDS = PROMPT_TOKEN_BREAKDOWN_CATEGORIES.map((c)=>c.id).filter((id)=>id !== "conversation");
INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP = [
    "user_info",
    "rules",
    "agent_skills",
    "available_subagent_models",
    "available_subagent_types"
];
promptTokenBreakdownCategoryEstimatedTokens = createHistogram("agent.prompt_token_breakdown.category_estimated_tokens", {
    description: "Raw (pre-apportionment) estimated tokens per category for the prompt-token breakdown visualizer. Tagged with `category` (system_prompt, tools, rules, skills, mcp, subagents, summarized_conversation, conversation).",
    labelNames: [
        "category"
    ]
});

}
