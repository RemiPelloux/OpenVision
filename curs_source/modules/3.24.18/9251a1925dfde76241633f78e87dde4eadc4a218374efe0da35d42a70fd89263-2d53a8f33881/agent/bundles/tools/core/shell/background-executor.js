import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_background_shell_lifecycle } from "./background-shell-lifecycle.js";
import { init_exec_id } from "./exec-id.js";
import { init_shell5 } from "./shell.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_background_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { init_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_shell_tool_pb } from "../../../../../proto/dist/generated/agent/v1/shell_tool_pb.js";
var logger99;
export { logger99 };
var __wakaru_init_background_executor_initialized = false;
export function init_background_executor() {
if (__wakaru_init_background_executor_initialized) return;
__wakaru_init_background_executor_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_background_shell_exec_pb();
init_shell_exec_pb();
init_shell_tool_pb();
init_background_shell_lifecycle();
init_exec_id();
init_shell5();
logger99 = createLogger("tools/shell/background-executor");

}
