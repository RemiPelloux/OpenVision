import { init_labeling_agent_mode } from "./labeling-agent-mode.js";
import { init_local_loop_turn_router } from "./local-loop-turn-router.js";
import { init_local_routing_conversation } from "./local-routing-conversation.js";
import { init_managed_local_model } from "./managed-local-model.js";
import { init_run_inference_session } from "./run-inference-session.js";
import { init_dist28 } from "../../../../agent-transcript/dist/index.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist37 } from "../../../../chat-inference-proto/dist/index.js";
var __wakaru_init_managed_inference_session_initialized = false;
export function init_managed_inference_session() {
if (__wakaru_init_managed_inference_session_initialized) return;
__wakaru_init_managed_inference_session_initialized = true;
"use strict";
init_dist35();
init_dist28();
init_dist37();
init_labeling_agent_mode();
init_local_loop_turn_router();
init_local_routing_conversation();
init_managed_local_model();
init_run_inference_session();

}
