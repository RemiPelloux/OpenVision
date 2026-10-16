import { anchoredRoot } from "../../utils_pb_exports.js";
var STORE_CANVASES_MOUNT_ALTERNATION, AGENT_STORE_MOUNT_ROOT, CLOUD_CANVAS_ROOT, MANAGED_CANVAS_REGEX, STORE_CANVAS_REGEX, USER_STORE_REPLICA_CANVAS_REGEX;
export { AGENT_STORE_MOUNT_ROOT, CLOUD_CANVAS_ROOT, MANAGED_CANVAS_REGEX, STORE_CANVASES_MOUNT_ALTERNATION, STORE_CANVAS_REGEX, USER_STORE_REPLICA_CANVAS_REGEX };
var __wakaru_init_canvas_path_initialized = false;
export function init_canvas_path() {
if (__wakaru_init_canvas_path_initialized) return;
__wakaru_init_canvas_path_initialized = true;
"use strict";
STORE_CANVASES_MOUNT_ALTERNATION = "user|automation";
AGENT_STORE_MOUNT_ROOT = "/cursor/stores";
CLOUD_CANVAS_ROOT = "canvases";
MANAGED_CANVAS_REGEX = /(?:^|\/)\.cursor\/projects\/[^/]+\/canvases\/[^/]+\.canvas\.tsx$/i;
STORE_CANVAS_REGEX = new RegExp(`^${anchoredRoot(AGENT_STORE_MOUNT_ROOT)}/(?:${STORE_CANVASES_MOUNT_ALTERNATION})/${CLOUD_CANVAS_ROOT}/(?:[^/]+/)?[^/]+\\.canvas\\.tsx$`);
USER_STORE_REPLICA_CANVAS_REGEX = /(?:^|\/)[^/]+\/files\/canvases\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/source\.canvas\.tsx$/i;

}
