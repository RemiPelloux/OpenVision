import { init_streamableHttp } from "../../node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js";
import { init_dist3 } from "../../utils/dist/index.js";
var __wakaru_init_mcp_session_termination_initialized = false;
export function init_mcp_session_termination() {
if (__wakaru_init_mcp_session_termination_initialized) return;
__wakaru_init_mcp_session_termination_initialized = true;
"use strict";
init_streamableHttp();
init_dist3();

}
