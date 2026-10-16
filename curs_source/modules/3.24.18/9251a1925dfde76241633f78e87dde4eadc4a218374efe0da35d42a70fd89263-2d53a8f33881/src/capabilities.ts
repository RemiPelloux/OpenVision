var DAEMON_CAPABILITY_PLUGINS_V1, DAEMON_CAPABILITY_AGENT_STORE_V1, DAEMON_CAPABILITY_AUTH_REFRESH_V1, implemented;
export { DAEMON_CAPABILITY_AGENT_STORE_V1, DAEMON_CAPABILITY_AUTH_REFRESH_V1, DAEMON_CAPABILITY_PLUGINS_V1, implemented };
var __wakaru_init_capabilities2_initialized = false;
export function init_capabilities2() {
if (__wakaru_init_capabilities2_initialized) return;
__wakaru_init_capabilities2_initialized = true;
"use strict";
DAEMON_CAPABILITY_PLUGINS_V1 = "agent_host_plugins.v1";
DAEMON_CAPABILITY_AGENT_STORE_V1 = "agent_host_agent_store.v1";
DAEMON_CAPABILITY_AUTH_REFRESH_V1 = "auth_refresh.v1";
implemented = new Set();

}
