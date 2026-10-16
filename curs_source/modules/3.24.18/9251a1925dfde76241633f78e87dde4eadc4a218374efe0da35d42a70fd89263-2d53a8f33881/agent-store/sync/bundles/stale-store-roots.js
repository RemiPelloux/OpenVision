import { init_paths3 } from "./paths.js";
import { init_store_lock } from "./store-lock.js";
var __wakaru_init_stale_store_roots_initialized = false;
export function init_stale_store_roots() {
if (__wakaru_init_stale_store_roots_initialized) return;
__wakaru_init_stale_store_roots_initialized = true;
"use strict";
init_paths3();
init_store_lock();

}
