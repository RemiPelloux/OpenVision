import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_node2 } from "../../../../agent-exec/dist/node.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_mcp_metrics } from "../../utils/mcp-metrics.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
var logger61, WRITE_TO_FILE_FAILED_NOTICE;
export { WRITE_TO_FILE_FAILED_NOTICE, logger61 };
var __wakaru_init_mcp_output_spill_initialized = false;
export function init_mcp_output_spill() {
if (__wakaru_init_mcp_output_spill_initialized) return;
__wakaru_init_mcp_output_spill_initialized = true;
"use strict";
init_dist8();
init_node2();
init_dist();
init_mcp_exec_pb();
init_mcp_metrics();
logger61 = createLogger("@anysphere/agent:mcp-output-spill");
WRITE_TO_FILE_FAILED_NOTICE = "[write_to_file was requested but the result could not be written to a file; it is returned inline instead.]";

}
