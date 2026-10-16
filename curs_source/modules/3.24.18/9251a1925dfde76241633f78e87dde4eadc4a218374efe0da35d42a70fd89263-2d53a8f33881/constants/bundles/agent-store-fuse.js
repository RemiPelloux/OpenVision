var AGENT_STORE_FUSE_RUNTIME_DIR, AGENT_STORE_FUSE_EVENTS_PATH, AGENT_STORE_FUSE_NOTICE_CURSOR_PATH, AGENT_STORE_FUSE_WEDGE_REPORT_PATH, AGENT_STORE_FUSE_PID_FILE, AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH, AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE, AGENT_STORE_FUSE_RELAUNCH_REASON_PATH;
export { AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE, AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH, AGENT_STORE_FUSE_EVENTS_PATH, AGENT_STORE_FUSE_NOTICE_CURSOR_PATH, AGENT_STORE_FUSE_PID_FILE, AGENT_STORE_FUSE_RELAUNCH_REASON_PATH, AGENT_STORE_FUSE_RUNTIME_DIR, AGENT_STORE_FUSE_WEDGE_REPORT_PATH };
var __wakaru_init_agent_store_fuse_initialized = false;
export function init_agent_store_fuse() {
if (__wakaru_init_agent_store_fuse_initialized) return;
__wakaru_init_agent_store_fuse_initialized = true;
"use strict";
AGENT_STORE_FUSE_RUNTIME_DIR = "/run/agent-store-fuse";
AGENT_STORE_FUSE_EVENTS_PATH = "/run/agent-store-fuse/events.jsonl";
AGENT_STORE_FUSE_NOTICE_CURSOR_PATH = "/run/agent-store-fuse/notice-cursor.json";
AGENT_STORE_FUSE_WEDGE_REPORT_PATH = "/run/agent-store-fuse/wedge-report.json";
AGENT_STORE_FUSE_PID_FILE = "/run/agent-store-fuse/pid";
AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH = "/run/agent-store-fuse/dispatch-wedge-report.json";
AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE = "cursor-agent-store-fuse";
AGENT_STORE_FUSE_RELAUNCH_REASON_PATH = "/run/agent-store-fuse/relaunch-reason";

}
