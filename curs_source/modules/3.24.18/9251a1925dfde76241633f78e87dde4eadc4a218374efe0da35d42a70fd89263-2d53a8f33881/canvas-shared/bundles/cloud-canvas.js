import { AGENT_STORE_MOUNT_ROOT2, AGENT_STORE_USER_MOUNT_NAME, init_agent_store_ids } from "../../constants/dist/agent-store-ids.js";
var USER_STORE_MOUNT_DIR;
export { USER_STORE_MOUNT_DIR };
var __wakaru_init_cloud_canvas_initialized = false;
export function init_cloud_canvas() {
if (__wakaru_init_cloud_canvas_initialized) return;
__wakaru_init_cloud_canvas_initialized = true;
"use strict";
init_agent_store_ids();
USER_STORE_MOUNT_DIR = `${AGENT_STORE_MOUNT_ROOT2}/${AGENT_STORE_USER_MOUNT_NAME}`;

}
