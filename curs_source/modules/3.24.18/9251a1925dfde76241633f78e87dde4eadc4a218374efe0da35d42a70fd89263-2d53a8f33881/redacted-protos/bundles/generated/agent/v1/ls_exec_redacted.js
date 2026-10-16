import { init_ls_exec_pb } from "../../../../../proto/dist/generated/agent/v1/ls_exec_pb.js";
import { init_sandbox_redacted } from "./sandbox_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_ls_exec_redacted_initialized = false;
export function init_ls_exec_redacted() {
if (__wakaru_init_ls_exec_redacted_initialized) return;
__wakaru_init_ls_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_ls_exec_pb();
init_sandbox_redacted();

}
