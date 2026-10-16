var PROMPTED_PREFIX, PROMPTED_MIDDLE, PROMPTED_SUFFIX;
export { PROMPTED_MIDDLE, PROMPTED_PREFIX, PROMPTED_SUFFIX };
var __wakaru_init_mcp_auth_prompted_initialized = false;
export function init_mcp_auth_prompted() {
if (__wakaru_init_mcp_auth_prompted_initialized) return;
__wakaru_init_mcp_auth_prompted_initialized = true;
"use strict";
PROMPTED_PREFIX = "Authentication required for ";
PROMPTED_MIDDLE = "; the user has been prompted (interaction ";
PROMPTED_SUFFIX = "). Retry the call after they connect.";

}
