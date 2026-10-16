var DEFAULT_LOCAL_AGENT_USER_AGENT;
export { DEFAULT_LOCAL_AGENT_USER_AGENT };
var __wakaru_init_user_agent_initialized = false;
export function init_user_agent() {
if (__wakaru_init_user_agent_initialized) return;
__wakaru_init_user_agent_initialized = true;
"use strict";
DEFAULT_LOCAL_AGENT_USER_AGENT = "Cursor-CLI/unknown";

}
