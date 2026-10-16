import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_mcp_exec_pb } from "../../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_mcp_redacted } from "./mcp_redacted.js";
import { init_utils_redacted } from "./utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_mcp_exec_redacted_initialized = false;
export function init_mcp_exec_redacted() {
if (__wakaru_init_mcp_exec_redacted_initialized) return;
__wakaru_init_mcp_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_esm2();
init_mcp_exec_pb();
init_utils_redacted();
init_mcp_redacted();

}
