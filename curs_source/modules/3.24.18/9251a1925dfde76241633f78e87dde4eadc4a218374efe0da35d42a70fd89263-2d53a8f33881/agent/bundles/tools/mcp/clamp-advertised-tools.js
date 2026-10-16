import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_mcp_auth_invocation } from "./mcp-auth-invocation.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var logger102, advertisedToolsClamped;
export { advertisedToolsClamped, logger102 };
var __wakaru_init_clamp_advertised_tools_initialized = false;
export function init_clamp_advertised_tools() {
if (__wakaru_init_clamp_advertised_tools_initialized) return;
__wakaru_init_clamp_advertised_tools_initialized = true;
"use strict";
init_dist();
init_dist4();
init_mcp_auth_invocation();
logger102 = createLogger("@anysphere/agent:advertised-tools-clamp");
advertisedToolsClamped = createCounter("agent.tools.total_clamped", {
    description: "Advertised tool lists sliced to maxAdvertisedTools by dropping trailing direct MCP tools"
});

}
