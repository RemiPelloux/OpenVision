import { init_kv_pb } from "../../../../../proto/dist/generated/agent/v1/kv_pb.js";
import { init_exec_redacted } from "./exec_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_kv_redacted_initialized = false;
export function init_kv_redacted() {
if (__wakaru_init_kv_redacted_initialized) return;
__wakaru_init_kv_redacted_initialized = true;
"use strict";
init_dist27();
init_kv_pb();
init_exec_redacted();

}
