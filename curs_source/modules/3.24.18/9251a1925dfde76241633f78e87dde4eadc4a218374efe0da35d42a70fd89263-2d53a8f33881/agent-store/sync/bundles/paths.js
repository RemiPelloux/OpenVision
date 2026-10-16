import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { createWindowsUserIdentityReader } from "../../../mcp_sandbox_policy_exports.js";
var import_node_child_process16, fs17, os13, path31, AGENT_STORE_SYNC_DIR_NAME, AGENT_STORE_CONFLICT_EVENTS_FILE_NAME, AGENT_STORE_CONFLICT_PENDING_FILE_NAME, PRIVATE_DIR_MODE, AgentStorePathError, readCurrentWindowsUserIdentity;
export { AGENT_STORE_CONFLICT_EVENTS_FILE_NAME, AGENT_STORE_CONFLICT_PENDING_FILE_NAME, AGENT_STORE_SYNC_DIR_NAME, AgentStorePathError, PRIVATE_DIR_MODE, fs17, import_node_child_process16, os13, path31, readCurrentWindowsUserIdentity };
var __wakaru_init_paths3_initialized = false;
export function init_paths3() {
if (__wakaru_init_paths3_initialized) return;
__wakaru_init_paths3_initialized = true;
"use strict";
import_node_child_process16 = require("node:child_process");
fs17 = __toESM(require("node:fs"), 1);
os13 = __toESM(require("node:os"), 1);
path31 = __toESM(require("node:path"), 1);
init_dist2();
AGENT_STORE_SYNC_DIR_NAME = ".sync";
AGENT_STORE_CONFLICT_EVENTS_FILE_NAME = "conflict-events.jsonl";
AGENT_STORE_CONFLICT_PENDING_FILE_NAME = "conflict-events.pending.jsonl";
PRIVATE_DIR_MODE = 448;
AgentStorePathError = class extends Error {
    constructor({ code, message, failedPath }){
        super(message);
        this.name = "AgentStorePathError";
        this.code = code;
        this.failedPath = failedPath;
    }
};
readCurrentWindowsUserIdentity = createWindowsUserIdentityReader(import_node_child_process16.execFileSync);

}
