import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_call_observability } from "./call-observability.js";
import { init_errors9 } from "./errors.js";
import { init_dashboard_pb } from "../../proto/dist/generated/aiserver/v1/dashboard_pb.js";
import { init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var logger139, EMPTY_OBJECT_SCHEMA;
export { EMPTY_OBJECT_SCHEMA, logger139 };
var __wakaru_init_call_mcp_tool_initialized = false;
export function init_call_mcp_tool() {
if (__wakaru_init_call_mcp_tool_initialized) return;
__wakaru_init_call_mcp_tool_initialized = true;
"use strict";
init_dist();
init_dist19();
init_dashboard_pb();
init_mcp_tool_pb2();
init_esm2();
init_call_observability();
init_errors9();
logger139 = createLogger("placement-routing-mcp:call");
EMPTY_OBJECT_SCHEMA = {
    type: "object",
    properties: {}
};

}
