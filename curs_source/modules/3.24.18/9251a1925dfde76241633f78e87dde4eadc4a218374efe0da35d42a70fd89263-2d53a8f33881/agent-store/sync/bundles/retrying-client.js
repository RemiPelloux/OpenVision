import { init_backoff_scheduler } from "./backoff-scheduler.js";
import { init_bcs_client } from "./bcs-client.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_mint_retry_policy } from "./mint-retry-policy.js";
import { init_resilience_events } from "./resilience-events.js";
import { init_token_caching_client } from "./token-caching-client.js";
import { init_validation } from "./validation.js";
import { Code } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var RETRYABLE_CONNECT_CODES;
export { RETRYABLE_CONNECT_CODES };
var __wakaru_init_retrying_client_initialized = false;
export function init_retrying_client() {
if (__wakaru_init_retrying_client_initialized) return;
__wakaru_init_retrying_client_initialized = true;
"use strict";
init_esm3();
init_backoff_scheduler();
init_bcs_client();
init_connect_errors();
init_mint_retry_policy();
init_resilience_events();
init_token_caching_client();
init_validation();
RETRYABLE_CONNECT_CODES = new Set([
    Code.Unavailable,
    Code.ResourceExhausted,
    Code.Internal,
    Code.Aborted,
    Code.DeadlineExceeded
]);

}
