import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_mcp_pb } from "../../proto/dist/generated/agent/v1/mcp_pb.js";
var __wakaru_init_mcp_tools_proto_initialized = false;
export function init_mcp_tools_proto() {
if (__wakaru_init_mcp_tools_proto_initialized) return;
__wakaru_init_mcp_tools_proto_initialized = true;
"use strict";
init_mcp_pb();
init_esm2();

}
