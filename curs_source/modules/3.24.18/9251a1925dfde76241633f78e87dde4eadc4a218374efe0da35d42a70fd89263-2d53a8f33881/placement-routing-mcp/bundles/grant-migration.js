import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_grant_migration_binding } from "../../mcp-core/dist/oauth/grant-migration-binding.js";
import { init_call_observability } from "./call-observability.js";
import { init_mcp_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_pb.js";
import { init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var logger140;
export { logger140 };
var __wakaru_init_grant_migration_initialized = false;
export function init_grant_migration() {
if (__wakaru_init_grant_migration_initialized) return;
__wakaru_init_grant_migration_initialized = true;
"use strict";
init_dist();
init_grant_migration_binding();
init_mcp_pb2();
init_mcp_tool_pb2();
init_call_observability();
logger140 = createLogger("placement-routing-mcp:grant-migration");

}
