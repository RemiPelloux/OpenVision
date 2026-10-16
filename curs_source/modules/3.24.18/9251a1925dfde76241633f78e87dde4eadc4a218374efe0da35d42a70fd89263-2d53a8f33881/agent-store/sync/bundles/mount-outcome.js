import { init_bcs_client } from "./bcs-client.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_local_index } from "./local-index.js";
import { init_paths3 } from "./paths.js";
import { init_safe_paths } from "./safe-paths.js";
import { init_store_lock } from "./store-lock.js";
var __wakaru_init_mount_outcome_initialized = false;
export function init_mount_outcome() {
if (__wakaru_init_mount_outcome_initialized) return;
__wakaru_init_mount_outcome_initialized = true;
"use strict";
init_bcs_client();
init_connect_errors();
init_local_index();
init_paths3();
init_safe_paths();
init_store_lock();

}
