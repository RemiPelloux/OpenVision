import { init_common9 } from "../../common.js";
import { init_retry_helpers } from "./retry-helpers.js";
import { init_tool_execution_timeout } from "../../tool-execution-timeout.js";
import { init_sandbox_pb } from "../../../../../proto/dist/generated/agent/v1/sandbox_pb.js";
import { init_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var SHELL_CHAR_HARD_LIMIT, SHELL_MISSING_EXIT_ERROR_MESSAGE, MEMORY_ADVICE;
export { MEMORY_ADVICE, SHELL_CHAR_HARD_LIMIT, SHELL_MISSING_EXIT_ERROR_MESSAGE };
var __wakaru_init_formatters2_initialized = false;
export function init_formatters2() {
if (__wakaru_init_formatters2_initialized) return;
__wakaru_init_formatters2_initialized = true;
"use strict";
init_sandbox_pb();
init_shell_exec_pb();
init_common9();
init_tool_execution_timeout();
init_retry_helpers();
SHELL_CHAR_HARD_LIMIT = 2e4;
SHELL_MISSING_EXIT_ERROR_MESSAGE = "The shell command returned no exit status, so its result is unknown \u2014 do not assume it ran or succeeded. If this repeats, the execution environment may need to be restarted.";
MEMORY_ADVICE = "run fewer jobs in parallel, process data in smaller batches, or stop background processes you no longer need";

}
