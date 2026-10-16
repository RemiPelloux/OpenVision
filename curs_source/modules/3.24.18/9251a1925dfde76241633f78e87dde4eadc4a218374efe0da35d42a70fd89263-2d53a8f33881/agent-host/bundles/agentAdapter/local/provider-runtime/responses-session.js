import { init_dist9 } from "../../../../../agent-client/dist/index.js";
import { init_api_key_helper } from "./api-key-helper.js";
import { init_assistant_prefill } from "./assistant-prefill.js";
import { init_encrypted_reasoning_replay } from "./encrypted-reasoning-replay.js";
import { init_helper_authorized_fetch } from "./helper-authorized-fetch.js";
import { init_incomplete_stream } from "./incomplete-stream.js";
import { init_model_catalog_probe } from "./model-catalog-probe.js";
import { init_output_limit } from "./output-limit.js";
import { init_request_body } from "./request-body.js";
import { init_responses_usage_observer } from "./responses-usage-observer.js";
import { init_sanitized_usage } from "./sanitized-usage.js";
import { init_tool_output_fallback } from "./tool-output-fallback.js";
import { init_user_agent } from "./user-agent.js";
import { init_dist35 } from "../../../../../agent/dist/index.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist38 } from "../../../../../node_modules/.pnpm/_11ffe93f78e0bb11b0d7c84dcaa30c22/node_modules/@ai-sdk/openai/dist/index.mjs";
var __wakaru_init_responses_session_initialized = false;
export function init_responses_session() {
if (__wakaru_init_responses_session_initialized) return;
__wakaru_init_responses_session_initialized = true;
"use strict";
init_dist38();
init_dist35();
init_dist9();
init_dist26();
init_api_key_helper();
init_assistant_prefill();
init_encrypted_reasoning_replay();
init_helper_authorized_fetch();
init_incomplete_stream();
init_model_catalog_probe();
init_output_limit();
init_request_body();
init_responses_usage_observer();
init_sanitized_usage();
init_tool_output_fallback();
init_user_agent();

}
