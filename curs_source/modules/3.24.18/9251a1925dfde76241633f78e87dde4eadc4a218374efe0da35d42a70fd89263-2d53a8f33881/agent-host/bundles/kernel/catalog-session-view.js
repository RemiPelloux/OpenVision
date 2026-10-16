import { init_client4 } from "../public-api/client.js";
var AGENT_HOST_SESSION_LIST_DEFAULT_LIMIT, AGENT_HOST_SESSION_LIST_MAX_LIMIT;
export { AGENT_HOST_SESSION_LIST_DEFAULT_LIMIT, AGENT_HOST_SESSION_LIST_MAX_LIMIT };
var __wakaru_init_catalog_session_view_initialized = false;
export function init_catalog_session_view() {
if (__wakaru_init_catalog_session_view_initialized) return;
__wakaru_init_catalog_session_view_initialized = true;
"use strict";
init_client4();
AGENT_HOST_SESSION_LIST_DEFAULT_LIMIT = 50;
AGENT_HOST_SESSION_LIST_MAX_LIMIT = 200;

}
