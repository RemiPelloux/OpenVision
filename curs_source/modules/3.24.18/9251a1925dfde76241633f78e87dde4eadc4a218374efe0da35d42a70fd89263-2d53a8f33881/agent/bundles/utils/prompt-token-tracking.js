import { init_context_processing } from "../context-processing.js";
import { init_user_info } from "../prompts/user-info.js";
import { init_event_tracking } from "./event-tracking.js";
import { init_mcp_metrics } from "./mcp-metrics.js";
import { init_skill_catalog_budget_metrics } from "./skill-catalog-budget-metrics.js";
import { init_token_estimate3 } from "./token-estimate.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var __wakaru_init_prompt_token_tracking_initialized = false;
export function init_prompt_token_tracking() {
if (__wakaru_init_prompt_token_tracking_initialized) return;
__wakaru_init_prompt_token_tracking_initialized = true;
"use strict";
init_dist32();
init_agent_v1();
init_dist27();
init_context_processing();
init_user_info();
init_event_tracking();
init_mcp_metrics();
init_skill_catalog_budget_metrics();
init_token_estimate3();
init_token_estimate3();

}
