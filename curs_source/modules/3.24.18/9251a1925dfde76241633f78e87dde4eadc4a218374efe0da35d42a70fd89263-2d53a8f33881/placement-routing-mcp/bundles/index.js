import { init_call_mcp_tool } from "./call-mcp-tool.js";
import { init_call_observability } from "./call-observability.js";
import { init_errors9 } from "./errors.js";
import { init_grant_migration } from "./grant-migration.js";
import { init_mcp_auth_tool } from "./mcp-auth-tool.js";
import { init_placement_routing_mcp_provider } from "./placement-routing-mcp-provider.js";
import { init_placement_snapshot } from "./placement-snapshot.js";
import { init_server_placed_client } from "./server-placed-client.js";
var __wakaru_init_dist39_initialized = false;
export function init_dist39() {
if (__wakaru_init_dist39_initialized) return;
__wakaru_init_dist39_initialized = true;
"use strict";
init_call_mcp_tool();
init_call_observability();
init_errors9();
init_grant_migration();
init_mcp_auth_tool();
init_placement_routing_mcp_provider();
init_placement_snapshot();
init_server_placed_client();

}
