import { init_backoff_scheduler } from "./backoff-scheduler.js";
import { init_bcs_client } from "./bcs-client.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_mint_retry_budget } from "./mint-retry-budget.js";
import { init_mint_retry_policy } from "./mint-retry-policy.js";
import { init_validation } from "./validation.js";
var DEFAULT_MINT_NEGATIVE_CACHE_MAX_MS, DEFAULT_MINT_TERMINAL_DENIAL_CACHE_MS, MINT_RETRY_AFTER_HEADER_MAX_MS, SYNC_DISABLED_UNTIL_MS;
export { DEFAULT_MINT_NEGATIVE_CACHE_MAX_MS, DEFAULT_MINT_TERMINAL_DENIAL_CACHE_MS, MINT_RETRY_AFTER_HEADER_MAX_MS, SYNC_DISABLED_UNTIL_MS };
var __wakaru_init_token_caching_client_initialized = false;
export function init_token_caching_client() {
if (__wakaru_init_token_caching_client_initialized) return;
__wakaru_init_token_caching_client_initialized = true;
"use strict";
init_backoff_scheduler();
init_bcs_client();
init_connect_errors();
init_mint_retry_budget();
init_mint_retry_policy();
init_validation();
DEFAULT_MINT_NEGATIVE_CACHE_MAX_MS = 15 * 6e4;
DEFAULT_MINT_TERMINAL_DENIAL_CACHE_MS = 30 * 6e4;
MINT_RETRY_AFTER_HEADER_MAX_MS = 24 * 60 * 60 * 1e3;
SYNC_DISABLED_UNTIL_MS = Number.POSITIVE_INFINITY;

}
