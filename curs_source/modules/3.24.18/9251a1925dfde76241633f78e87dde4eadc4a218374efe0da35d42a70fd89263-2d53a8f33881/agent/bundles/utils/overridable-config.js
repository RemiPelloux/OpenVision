import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
import { overridableConfig } from "../../../mcp_sandbox_policy_exports.js";
var configOverridesKey, READ_LINT_TIMEOUT_MS, WRITE_EVAL_TRANSCRIPTS, EVAL_ENFORCED_TEMPERATURE, EVAL_ENFORCED_TOP_P, EVAL_ENFORCED_TOP_K, EVAL_ENFORCED_MIN_P, EVAL_ENFORCED_TEMPERATURE_NON_THINKING, EVAL_ENFORCED_AGENT_TOKEN_LIMIT, EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION, EVAL_ENFORCED_SELF_SUMMARY, EVAL_ENFORCED_WAIT_FOR_SUMMARIZATION_COMPLETION, EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT, EVAL_ENFORCED_EFFORT_LEVEL, EVAL_ENFORCED_IS_EAGER_EDITING_MODEL, DISABLE_SEMANTIC_SEARCH, ALLOW_PROMPT_TWEAKS, DISABLE_UI_BROWSER_VERIFICATION_PROMPT, ALLOW_TASK_TOOL_IN_RL_HARNESS, ALLOW_NESTED_TASK_TOOL_IN_RL_HARNESS, SUMMARIZATION_FORCE_DETERMINISTIC_FALLBACK, CANVAS_POST_EDIT_DIAGNOSTICS_TIMEOUT_MS;
export { ALLOW_NESTED_TASK_TOOL_IN_RL_HARNESS, ALLOW_PROMPT_TWEAKS, ALLOW_TASK_TOOL_IN_RL_HARNESS, CANVAS_POST_EDIT_DIAGNOSTICS_TIMEOUT_MS, DISABLE_SEMANTIC_SEARCH, DISABLE_UI_BROWSER_VERIFICATION_PROMPT, EVAL_ENFORCED_AGENT_TOKEN_LIMIT, EVAL_ENFORCED_EFFORT_LEVEL, EVAL_ENFORCED_IS_EAGER_EDITING_MODEL, EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION, EVAL_ENFORCED_MIN_P, EVAL_ENFORCED_SELF_SUMMARY, EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT, EVAL_ENFORCED_TEMPERATURE, EVAL_ENFORCED_TEMPERATURE_NON_THINKING, EVAL_ENFORCED_TOP_K, EVAL_ENFORCED_TOP_P, EVAL_ENFORCED_WAIT_FOR_SUMMARIZATION_COMPLETION, READ_LINT_TIMEOUT_MS, SUMMARIZATION_FORCE_DETERMINISTIC_FALLBACK, WRITE_EVAL_TRANSCRIPTS, configOverridesKey };
var __wakaru_init_overridable_config_initialized = false;
export function init_overridable_config() {
if (__wakaru_init_overridable_config_initialized) return;
__wakaru_init_overridable_config_initialized = true;
"use strict";
init_dist();
configOverridesKey = createKey(Symbol("configOverrides"), {});
READ_LINT_TIMEOUT_MS = overridableConfig("read_lint_timeout_ms", 1e4);
WRITE_EVAL_TRANSCRIPTS = overridableConfig("writeEvalTranscripts", false);
EVAL_ENFORCED_TEMPERATURE = overridableConfig("evalServiceEnforcedTemperature", void 0);
EVAL_ENFORCED_TOP_P = overridableConfig("evalServiceEnforcedTopP", void 0);
EVAL_ENFORCED_TOP_K = overridableConfig("evalServiceEnforcedTopK", void 0);
EVAL_ENFORCED_MIN_P = overridableConfig("evalServiceEnforcedMinP", void 0);
EVAL_ENFORCED_TEMPERATURE_NON_THINKING = overridableConfig("evalServiceEnforcedTemperatureNonThinking", void 0);
EVAL_ENFORCED_AGENT_TOKEN_LIMIT = overridableConfig("evalServiceEnforcedAgentTokenLimit", void 0);
EVAL_ENFORCED_MAX_TOKENS_BEFORE_SUMMARIZATION = overridableConfig("evalServiceEnforcedMaxTokensBeforeSummarization", void 0);
EVAL_ENFORCED_SELF_SUMMARY = overridableConfig("evalServiceEnforcedSelfSummary", void 0);
EVAL_ENFORCED_WAIT_FOR_SUMMARIZATION_COMPLETION = overridableConfig("evalServiceEnforcedWaitForSummarizationCompletion", void 0);
EVAL_ENFORCED_SELF_SUMMARY_TOKEN_LIMIT = overridableConfig("evalServiceEnforcedSelfSummaryTokenLimit", void 0);
EVAL_ENFORCED_EFFORT_LEVEL = overridableConfig("evalServiceEnforcedEffortLevel", void 0);
EVAL_ENFORCED_IS_EAGER_EDITING_MODEL = overridableConfig("evalServiceEnforcedIsEagerEditingModel", void 0);
DISABLE_SEMANTIC_SEARCH = overridableConfig("disableSemanticSearch", false);
ALLOW_PROMPT_TWEAKS = overridableConfig("allowPromptTweaks", false);
DISABLE_UI_BROWSER_VERIFICATION_PROMPT = overridableConfig("disableUiBrowserVerificationPrompt", false);
ALLOW_TASK_TOOL_IN_RL_HARNESS = overridableConfig("allowTaskToolInRlHarness", false);
ALLOW_NESTED_TASK_TOOL_IN_RL_HARNESS = overridableConfig("allowNestedTaskToolInRlHarness", false);
SUMMARIZATION_FORCE_DETERMINISTIC_FALLBACK = overridableConfig("summarizationForceDeterministicFallback", void 0);
CANVAS_POST_EDIT_DIAGNOSTICS_TIMEOUT_MS = overridableConfig("canvas_post_edit_diagnostics_timeout_ms", 1e4);

}
