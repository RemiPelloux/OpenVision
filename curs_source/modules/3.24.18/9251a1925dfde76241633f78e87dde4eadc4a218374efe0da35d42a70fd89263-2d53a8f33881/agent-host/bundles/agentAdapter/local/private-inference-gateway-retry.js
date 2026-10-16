import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_private_inference_session_provider } from "./private-inference-session-provider.js";
import { init_private_inference_session } from "./private-inference-session.js";
var PRIVATE_INFERENCE_GATEWAY_RETRY_WINDOW_MS;
export { PRIVATE_INFERENCE_GATEWAY_RETRY_WINDOW_MS };
var __wakaru_init_private_inference_gateway_retry_initialized = false;
export function init_private_inference_gateway_retry() {
if (__wakaru_init_private_inference_gateway_retry_initialized) return;
__wakaru_init_private_inference_gateway_retry_initialized = true;
"use strict";
init_dist9();
init_private_inference_session();
init_private_inference_session_provider();
PRIVATE_INFERENCE_GATEWAY_RETRY_WINDOW_MS = 5 * 6e4;

}
