import { init_write_exec_pb } from "../../../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_write_exec_redacted_initialized = false;
export function init_write_exec_redacted() {
if (__wakaru_init_write_exec_redacted_initialized) return;
__wakaru_init_write_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_write_exec_pb();

}
