import { init_conflict_events } from "./conflict-events.js";
import { init_exclusive_mutation_lock } from "./exclusive-mutation-lock.js";
import { init_local_index } from "./local-index.js";
import { init_paths3 } from "./paths.js";
import { init_safe_paths } from "./safe-paths.js";
import { init_stat_fast_path } from "./stat-fast-path.js";
import { init_store_lock } from "./store-lock.js";
import { init_sync_engine } from "./sync-engine.js";
var __wakaru_init_store_clean_check_initialized = false;
export function init_store_clean_check() {
if (__wakaru_init_store_clean_check_initialized) return;
__wakaru_init_store_clean_check_initialized = true;
"use strict";
init_paths3();
init_conflict_events();
init_exclusive_mutation_lock();
init_local_index();
init_safe_paths();
init_stat_fast_path();
init_store_lock();
init_sync_engine();

}
