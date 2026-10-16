import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_paths3 } from "./paths.js";
import { init_secure_open } from "./secure-open.js";
var fs22, os16, path47, STORE_LOCK_MTIME_UPDATE_MS, STORE_LOCK_STALE_MS, StoreLockError;
export { STORE_LOCK_MTIME_UPDATE_MS, STORE_LOCK_STALE_MS, StoreLockError, fs22, os16, path47 };
var __wakaru_init_store_lock_initialized = false;
export function init_store_lock() {
if (__wakaru_init_store_lock_initialized) return;
__wakaru_init_store_lock_initialized = true;
"use strict";
fs22 = __toESM(require("node:fs"), 1);
os16 = __toESM(require("node:os"), 1);
path47 = __toESM(require("node:path"), 1);
init_paths3();
init_secure_open();
STORE_LOCK_MTIME_UPDATE_MS = 1e3;
STORE_LOCK_STALE_MS = 10 * 60 * 1e3;
StoreLockError = class extends Error {
    constructor(options2){
        super(options2.message);
        this.code = options2.code;
        this.lockPath = options2.lockPath;
        this.name = "StoreLockError";
    }
};

}
