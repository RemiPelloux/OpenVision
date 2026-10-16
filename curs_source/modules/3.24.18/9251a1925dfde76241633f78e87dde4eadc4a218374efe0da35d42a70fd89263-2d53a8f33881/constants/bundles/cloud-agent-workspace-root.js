var WINDOWS_DRIVE_ROOT;
export { WINDOWS_DRIVE_ROOT };
var __wakaru_init_cloud_agent_workspace_root_initialized = false;
export function init_cloud_agent_workspace_root() {
if (__wakaru_init_cloud_agent_workspace_root_initialized) return;
__wakaru_init_cloud_agent_workspace_root_initialized = true;
"use strict";
WINDOWS_DRIVE_ROOT = /^([A-Za-z]):[\\/]/;

}
