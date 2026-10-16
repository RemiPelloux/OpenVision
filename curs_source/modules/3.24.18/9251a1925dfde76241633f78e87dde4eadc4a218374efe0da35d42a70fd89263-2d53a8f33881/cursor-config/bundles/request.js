var LOCAL_CLI_MODE_ENV, LOCAL_CLI_MODE_HEADER, TEAM_ID_HEADER_NAME;
export { LOCAL_CLI_MODE_ENV, LOCAL_CLI_MODE_HEADER, TEAM_ID_HEADER_NAME };
var __wakaru_init_request_initialized = false;
export function init_request() {
if (__wakaru_init_request_initialized) return;
__wakaru_init_request_initialized = true;
"use strict";
LOCAL_CLI_MODE_ENV = "CURSOR_AGENT_CLI_LOCAL_MODE";
LOCAL_CLI_MODE_HEADER = "local-cli-mode";
TEAM_ID_HEADER_NAME = "x-cursor-team-id";

}
