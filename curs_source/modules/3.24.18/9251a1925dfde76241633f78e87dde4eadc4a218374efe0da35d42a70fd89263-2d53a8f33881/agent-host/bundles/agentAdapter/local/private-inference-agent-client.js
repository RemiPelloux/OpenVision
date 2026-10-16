import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_local_loop_agent_client } from "./local-loop-agent-client.js";
import { init_managed_local_agent_config } from "./managed-local-agent-config.js";
import { init_managed_local_prepare_attempt_context } from "./managed-local-prepare-attempt-context.js";
import { init_privacy_mode2 } from "./privacy-mode.js";
import { init_private_inference_gateway_retry } from "./private-inference-gateway-retry.js";
import { init_private_inference_session_provider } from "./private-inference-session-provider.js";
import { init_private_inference_session } from "./private-inference-session.js";
import { init_web_search2 } from "./provider-runtime/web-search.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var UNCONFIGURED_DETAIL, USAGE_ADMISSION_MISSING_DETAIL;
export { UNCONFIGURED_DETAIL, USAGE_ADMISSION_MISSING_DETAIL };
var __wakaru_init_private_inference_agent_client_initialized = false;
export function init_private_inference_agent_client() {
if (__wakaru_init_private_inference_agent_client_initialized) return;
__wakaru_init_private_inference_agent_client_initialized = true;
"use strict";
init_dist9();
init_esm3();
init_local_loop_agent_client();
init_managed_local_agent_config();
init_managed_local_prepare_attempt_context();
init_privacy_mode2();
init_private_inference_gateway_retry();
init_private_inference_session();
init_private_inference_session_provider();
init_web_search2();
UNCONFIGURED_DETAIL = 'Private inference is enabled but has no endpoint configuration. Put private-inference.toml in the enterprise Cursor directory (a Grok Build config.toml: [model_providers.<name>] with base_url, api_backend = "responses" and env_key or [auth] auth_provider_command \u2014 an executable path that prints the bare token \u2014 one [model.<key>] per model, [models] default), or for development set CURSOR_PRIVATE_INFERENCE_CONFIG=<config.toml> or the CURSOR_PRIVATE_INFERENCE_BASE_URL / _MODEL shorthand, then restart, or ask your admin to disable private inference for your team.';
USAGE_ADMISSION_MISSING_DETAIL = "Private inference requires durable usage storage and an authenticated usage-reporting transport.";

}
