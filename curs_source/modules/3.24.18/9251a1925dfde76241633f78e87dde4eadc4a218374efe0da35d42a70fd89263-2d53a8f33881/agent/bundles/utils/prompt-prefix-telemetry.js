import { createCounter } from "../../../dist_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
var userInfoRerenderedCounter, prefixRebuiltCounter, systemPromptChangeCauseCounter, userInfoCatalogUpdateCounter, SYSTEM_PROMPT_FINGERPRINT_KEYS;
export { SYSTEM_PROMPT_FINGERPRINT_KEYS, prefixRebuiltCounter, systemPromptChangeCauseCounter, userInfoCatalogUpdateCounter, userInfoRerenderedCounter };
var __wakaru_init_prompt_prefix_telemetry_initialized = false;
export function init_prompt_prefix_telemetry() {
if (__wakaru_init_prompt_prefix_telemetry_initialized) return;
__wakaru_init_prompt_prefix_telemetry_initialized = true;
"use strict";
init_dist4();
userInfoRerenderedCounter = createCounter("agent.prompt_prefix.user_info_rerendered", {
    description: "Cached first-turn <user_info> replaced on a later turn, by reason (one increment per contributing reason)",
    labelNames: [
        "reason",
        "vendor",
        "model"
    ]
});
prefixRebuiltCounter = createCounter("agent.prompt_prefix.rebuilt", {
    description: "Per-turn rebuild of a prompt-prefix component; `changed` is whether it differs from the previous turn (`first` = no fingerprinted previous turn). `tool_names` tracks the static tool name set only, not descriptions or schemas.",
    labelNames: [
        "component",
        "changed",
        "vendor",
        "model"
    ]
});
systemPromptChangeCauseCounter = createCounter("agent.prompt_prefix.system_prompt_change_cause", {
    description: "Which fingerprinted input differed when the rebuilt system prompt changed (one increment per differing input; `unknown` = content changed but no fingerprinted input did)",
    labelNames: [
        "cause",
        "vendor",
        "model"
    ]
});
userInfoCatalogUpdateCounter = createCounter("agent.prompt_prefix.user_info_catalog_update", {
    description: "Stale <user_info> catalog carried on the new user turn instead of re-rendering the cached first message, by catalog (one increment per stale catalog)",
    labelNames: [
        "catalog",
        "vendor",
        "model"
    ]
});
SYSTEM_PROMPT_FINGERPRINT_KEYS = [
    "content",
    "mode",
    "model",
    "agentType",
    "toolNames",
    "mcp",
    "rules",
    "featureFlags",
    "promptOptions"
];

}
