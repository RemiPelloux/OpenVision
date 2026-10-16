import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_paths3 } from "./paths.js";
import { init_safe_paths } from "./safe-paths.js";
import { init_secure_open } from "./secure-open.js";
var import_node_crypto47, fs24, path49, AGENT_STORE_PATH_SYNC_REQUESTS_DIR_NAME, PATH_SYNC_REQUEST_STALE_MS, PATH_SYNC_REQUEST_POLL_MS, PATH_SYNC_REQUEST_WAIT_POLL_MS, PRIVATE_FILE_MODE2, REQUEST_VERSION;
export { AGENT_STORE_PATH_SYNC_REQUESTS_DIR_NAME, PATH_SYNC_REQUEST_POLL_MS, PATH_SYNC_REQUEST_STALE_MS, PATH_SYNC_REQUEST_WAIT_POLL_MS, PRIVATE_FILE_MODE2, REQUEST_VERSION, fs24, import_node_crypto47, path49 };
var __wakaru_init_path_sync_request_initialized = false;
export function init_path_sync_request() {
if (__wakaru_init_path_sync_request_initialized) return;
__wakaru_init_path_sync_request_initialized = true;
"use strict";
import_node_crypto47 = require("node:crypto");
fs24 = __toESM(require("node:fs"), 1);
path49 = __toESM(require("node:path"), 1);
init_paths3();
init_safe_paths();
init_secure_open();
AGENT_STORE_PATH_SYNC_REQUESTS_DIR_NAME = "path-sync-requests";
PATH_SYNC_REQUEST_STALE_MS = 6e4;
PATH_SYNC_REQUEST_POLL_MS = 250;
PATH_SYNC_REQUEST_WAIT_POLL_MS = 50;
PRIVATE_FILE_MODE2 = 384;
REQUEST_VERSION = 1;

}
