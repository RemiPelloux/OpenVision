import { init_paths3 } from "./paths.js";
import { init_secure_open } from "./secure-open.js";
import { init_store_lock } from "./store-lock.js";
var STORE_EVICTION_MARK_TTL_MS;
export { STORE_EVICTION_MARK_TTL_MS };
var __wakaru_init_store_control_initialized = false;
export function init_store_control() {
if (__wakaru_init_store_control_initialized) return;
__wakaru_init_store_control_initialized = true;
"use strict";
init_paths3();
init_secure_open();
init_store_lock();
STORE_EVICTION_MARK_TTL_MS = 10 * 60 * 1e3;

}
