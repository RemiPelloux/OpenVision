import { init_paths3 } from "./paths.js";
import { init_safe_paths } from "./safe-paths.js";
import { init_secure_open } from "./secure-open.js";
import { init_store_clean_check } from "./store-clean-check.js";
import { init_store_control } from "./store-control.js";
import { init_store_lock } from "./store-lock.js";
import { init_sync_engine } from "./sync-engine.js";
var __wakaru_init_store_eviction_initialized = false;
export function init_store_eviction() {
if (__wakaru_init_store_eviction_initialized) return;
__wakaru_init_store_eviction_initialized = true;
"use strict";
init_paths3();
init_safe_paths();
init_secure_open();
init_store_clean_check();
init_store_control();
init_store_lock();
init_sync_engine();

}
