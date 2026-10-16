import { init_managed_local_mode_config } from "./managed-local-mode-config.js";
import { init_managed_local_subagent_model_config } from "./managed-local-subagent-model-config.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger134, KNOWN_VENDORS, KNOWN_PROMPT_VERSIONS, KNOWN_REASONING_EFFORTS, KNOWN_PERSONAS;
export { KNOWN_PERSONAS, KNOWN_PROMPT_VERSIONS, KNOWN_REASONING_EFFORTS, KNOWN_VENDORS, logger134 };
var __wakaru_init_managed_local_model_initialized = false;
export function init_managed_local_model() {
if (__wakaru_init_managed_local_model_initialized) return;
__wakaru_init_managed_local_model_initialized = true;
"use strict";
init_dist35();
init_dist();
init_managed_local_mode_config();
init_managed_local_subagent_model_config();
logger134 = createLogger("@anysphere/agent-host:managed-local-model");
KNOWN_VENDORS = [
    "anthropic",
    "openai",
    "google",
    "xai",
    "zai",
    "cursor",
    "unknown"
];
KNOWN_PROMPT_VERSIONS = [
    "dsv3-1018",
    "dsv3-1205",
    "cursor-0226",
    "latest",
    "gpt5-codex",
    "codex-cloud",
    "haiku"
];
KNOWN_REASONING_EFFORTS = [
    "low",
    "medium",
    "high",
    "extra-high",
    "xhigh",
    "max"
];
KNOWN_PERSONAS = [
    "anonymous",
    "composer",
    "auto",
    "grok",
    "grok-4.5",
    "grok-4.6",
    "grok-4.7"
];

}
