import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var __wakaru_init_redacted_interaction_listener_initialized = false;
export function init_redacted_interaction_listener() {
if (__wakaru_init_redacted_interaction_listener_initialized) return;
__wakaru_init_redacted_interaction_listener_initialized = true;
"use strict";
init_agent_v1();
init_dist27();

}
