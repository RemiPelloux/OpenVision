var DESKTOP_BRIDGE_PROTOCOL_VERSION, DESKTOP_BRIDGE_MAX_MESSAGE_BYTES, DESKTOP_BRIDGE_MAX_LIST_THREADS, DESKTOP_THREAD_REF_UUID_PATTERN;
export { DESKTOP_BRIDGE_MAX_LIST_THREADS, DESKTOP_BRIDGE_MAX_MESSAGE_BYTES, DESKTOP_BRIDGE_PROTOCOL_VERSION, DESKTOP_THREAD_REF_UUID_PATTERN };
var __wakaru_init_desktop_bridge_initialized = false;
export function init_desktop_bridge() {
if (__wakaru_init_desktop_bridge_initialized) return;
__wakaru_init_desktop_bridge_initialized = true;
"use strict";
DESKTOP_BRIDGE_PROTOCOL_VERSION = 1;
DESKTOP_BRIDGE_MAX_MESSAGE_BYTES = 256 * 1024;
DESKTOP_BRIDGE_MAX_LIST_THREADS = 200;
DESKTOP_THREAD_REF_UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

}
