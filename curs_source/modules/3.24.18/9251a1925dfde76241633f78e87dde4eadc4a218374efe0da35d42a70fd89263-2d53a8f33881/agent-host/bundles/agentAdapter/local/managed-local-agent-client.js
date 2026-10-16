import { init_local_loop_agent_client } from "./local-loop-agent-client.js";
import { init_managed_inference_session } from "./managed-inference-session.js";
import { init_managed_local_agent_config } from "./managed-local-agent-config.js";
import { init_managed_local_conversation_blobs } from "./managed-local-conversation-blobs.js";
import { init_managed_local_labeling } from "./managed-local-labeling.js";
import { init_managed_local_prepare_attempt_context } from "./managed-local-prepare-attempt-context.js";
import { init_managed_local_retry_identity } from "./managed-local-retry-identity.js";
import { init_privacy_mode2 } from "./privacy-mode.js";
var __wakaru_init_managed_local_agent_client_initialized = false;
export function init_managed_local_agent_client() {
if (__wakaru_init_managed_local_agent_client_initialized) return;
__wakaru_init_managed_local_agent_client_initialized = true;
"use strict";
init_local_loop_agent_client();
init_managed_inference_session();
init_managed_local_agent_config();
init_managed_local_labeling();
init_managed_local_conversation_blobs();
init_managed_local_prepare_attempt_context();
init_managed_local_retry_identity();
init_privacy_mode2();

}
