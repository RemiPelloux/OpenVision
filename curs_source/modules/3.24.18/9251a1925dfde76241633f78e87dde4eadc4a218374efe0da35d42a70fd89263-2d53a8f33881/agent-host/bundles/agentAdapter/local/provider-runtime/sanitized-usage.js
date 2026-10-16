import { init_credential_errors } from "./credential-errors.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { init_dist25 } from "../../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
var logger135;
export { logger135 };
var __wakaru_init_sanitized_usage_initialized = false;
export function init_sanitized_usage() {
if (__wakaru_init_sanitized_usage_initialized) return;
__wakaru_init_sanitized_usage_initialized = true;
"use strict";
init_dist26();
init_dist();
init_dist25();
init_credential_errors();
logger135 = createLogger("@anysphere/agent-host:provider-runtime");

}
