import { AGENT_STORE_MOUNT_ROOT2, AGENT_STORE_TMP_DIR_NAME, AGENT_STORE_TMP_DIR_NAME_DEV, init_agent_store_ids } from "./agent-store-ids.js";
var LOCAL_AGENT_STORE_TMP_DIR_NAMES, CLOUD_MOUNT_ROOT_NEEDLE, HASH_LINE_ANCHOR_PATTERN, COLON_LINE_RANGE_PATTERN;
export { CLOUD_MOUNT_ROOT_NEEDLE, COLON_LINE_RANGE_PATTERN, HASH_LINE_ANCHOR_PATTERN, LOCAL_AGENT_STORE_TMP_DIR_NAMES };
var __wakaru_init_agent_store_display_path_initialized = false;
export function init_agent_store_display_path() {
if (__wakaru_init_agent_store_display_path_initialized) return;
__wakaru_init_agent_store_display_path_initialized = true;
"use strict";
init_agent_store_ids();
LOCAL_AGENT_STORE_TMP_DIR_NAMES = new Set([
    AGENT_STORE_TMP_DIR_NAME,
    AGENT_STORE_TMP_DIR_NAME_DEV
]);
CLOUD_MOUNT_ROOT_NEEDLE = AGENT_STORE_MOUNT_ROOT2.replace(/^\/+/, "");
HASH_LINE_ANCHOR_PATTERN = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i;
COLON_LINE_RANGE_PATTERN = /:(\d+)(?:\s*-\s*(\d+))?$/;

}
