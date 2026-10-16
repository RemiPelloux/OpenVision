import { init_private_inference_agent_client } from "../agentAdapter/local/private-inference-agent-client.js";
import { init_private_inference_prompt_quality } from "../agentAdapter/local/private-inference-prompt-quality.js";
import { init_private_inference_session_provider } from "../agentAdapter/local/private-inference-session-provider.js";
import { init_private_inference_usage_admission } from "../agentAdapter/local/private-inference-usage-admission.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
var logger137;
export { logger137 };
var __wakaru_init_private_inference_loop_initialized = false;
export function init_private_inference_loop() {
if (__wakaru_init_private_inference_loop_initialized) return;
__wakaru_init_private_inference_loop_initialized = true;
"use strict";
init_dist();
init_private_inference_agent_client();
init_private_inference_prompt_quality();
init_private_inference_session_provider();
init_private_inference_usage_admission();
logger137 = createLogger("agent-host:private-inference");

}
