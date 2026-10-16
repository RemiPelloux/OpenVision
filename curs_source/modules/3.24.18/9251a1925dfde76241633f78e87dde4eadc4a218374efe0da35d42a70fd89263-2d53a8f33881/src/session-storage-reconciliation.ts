import { init_storage } from "../agent-host/dist/storage.js";
var import_node_fs41, import_node_path95, ORPHAN_SESSION_GRACE_MS;
export { ORPHAN_SESSION_GRACE_MS, import_node_fs41, import_node_path95 };
var __wakaru_init_session_storage_reconciliation_initialized = false;
export function init_session_storage_reconciliation() {
if (__wakaru_init_session_storage_reconciliation_initialized) return;
__wakaru_init_session_storage_reconciliation_initialized = true;
"use strict";
import_node_fs41 = require("node:fs");
import_node_path95 = require("node:path");
init_storage();
ORPHAN_SESSION_GRACE_MS = 10 * 60 * 1e3;

}
