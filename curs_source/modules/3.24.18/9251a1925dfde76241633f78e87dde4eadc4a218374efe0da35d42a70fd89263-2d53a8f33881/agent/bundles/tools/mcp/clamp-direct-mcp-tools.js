import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { BROWSER_MCP_PROVIDER_IDS, CUSTOM_USER_TOOLS_PROVIDER_ID } from "../../../../agent-exec/dist/mcp.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { CURSOR_SUBSCRIPTIONS_MCP_SERVER_NAME, init_constants6 } from "../../constants.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var logger103, mcpDirectModeClamped, MAX_LOGGED_DROPPED_TOOL_NAMES, PRIORITIZED_DIRECT_MCP_PROVIDERS, SECONDARY_DIRECT_MCP_PROVIDERS, prioritizedDirectMcpProviders, secondaryDirectMcpProviders;
export { MAX_LOGGED_DROPPED_TOOL_NAMES, PRIORITIZED_DIRECT_MCP_PROVIDERS, SECONDARY_DIRECT_MCP_PROVIDERS, logger103, mcpDirectModeClamped, prioritizedDirectMcpProviders, secondaryDirectMcpProviders };
var __wakaru_init_clamp_direct_mcp_tools_initialized = false;
export function init_clamp_direct_mcp_tools() {
if (__wakaru_init_clamp_direct_mcp_tools_initialized) return;
__wakaru_init_clamp_direct_mcp_tools_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist4();
init_constants6();
logger103 = createLogger("@anysphere/agent:mcp-direct-mode-clamp");
mcpDirectModeClamped = createCounter("agent.mcp.direct_mode_clamped", {
    description: "Direct-mode MCP tool lists sliced down to maxDirectMcpTools before advertisement"
});
MAX_LOGGED_DROPPED_TOOL_NAMES = 50;
PRIORITIZED_DIRECT_MCP_PROVIDERS = [
    ...BROWSER_MCP_PROVIDER_IDS,
    CUSTOM_USER_TOOLS_PROVIDER_ID
];
SECONDARY_DIRECT_MCP_PROVIDERS = [
    CURSOR_SUBSCRIPTIONS_MCP_SERVER_NAME
];
prioritizedDirectMcpProviders = new Set(PRIORITIZED_DIRECT_MCP_PROVIDERS);
secondaryDirectMcpProviders = new Set(SECONDARY_DIRECT_MCP_PROVIDERS);

}
