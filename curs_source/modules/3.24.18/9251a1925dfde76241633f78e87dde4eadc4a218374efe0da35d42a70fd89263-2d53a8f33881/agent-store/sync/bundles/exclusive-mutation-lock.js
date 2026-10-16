import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_paths3 } from "./paths.js";
import { init_store_lock } from "./store-lock.js";
var path48, AGENT_STORE_EXCLUSIVE_MUTATION_LOCK_FILE_NAME;
export { AGENT_STORE_EXCLUSIVE_MUTATION_LOCK_FILE_NAME, path48 };
var __wakaru_init_exclusive_mutation_lock_initialized = false;
export function init_exclusive_mutation_lock() {
if (__wakaru_init_exclusive_mutation_lock_initialized) return;
__wakaru_init_exclusive_mutation_lock_initialized = true;
"use strict";
path48 = __toESM(require("node:path"), 1);
init_paths3();
init_store_lock();
AGENT_STORE_EXCLUSIVE_MUTATION_LOCK_FILE_NAME = "exclusive-mutation.lock";

}
